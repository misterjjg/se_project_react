import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
  parseLocationData,
  parseTimeOfDay,
  parseForecastData,
} from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import {
  getClothingItems,
  addNewClothingItem,
  deleteClothingItems,
} from "../../utils/api";
import Profile from "../Profile/Profile";
import ConfirmationModal from "../ConfirmationModal/ConfimationModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import {
  postSignup,
  postSignIn,
  getUserInfo,
  editProfile,
  addCardLike,
  removeCardLike,
} from "../../utils/auth";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState({});
  const [day, setDay] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  // ----------------Handlers ---------------------------

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleEditProfileModal = () => {
    setActiveModal("editProfile");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleOpenConfirmationModal = () => {
    setActiveModal("confirm");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleSubmit = (request) => {
    setIsLoading(true);
    request()
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleAddNewItemSubmit = (values) => {
    const item = {
      name: values.name,
      imageUrl: values.imageUrl,
      weather: values.weatherType,
      token: values.token,
    };
    const newClothingRequest = () => {
      return addNewClothingItem(item).then((item) => {
        setClothingItems([item, ...clothingItems]);
      });
    };
    handleSubmit(newClothingRequest);
  };

  const handleDeleteItemSubmit = (selectedCard, token) => {
    const deleteCardRequest = () => {
      return deleteClothingItems(selectedCard, token).then(() => {
        const newItem = clothingItems.filter((item) => {
          return item._id !== selectedCard;
        });
        setClothingItems(newItem);
      });
    };
    handleSubmit(deleteCardRequest);
  };

  const handleLogin = (email, password) => {
    const logIn = () => {
      return postSignIn({ email, password }).then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          return res;
        }
      });
    };
    handleSubmit(logIn);
  };

  const handleRegisterSubmit = (email, password, name, avatar) => {
    const registerSubmitted = () => {
      return postSignup({ email, password, name, avatar }).then((res) => {
        handleLogin(email, password);
      });
    };
    handleSubmit(registerSubmitted);
  };

  const handleEditProfileSubmit = (name, avatar, token) => {
    const editProfileSubmitted = () => {
      return editProfile(name, avatar, token).then((res) => {
        setCurrentUser(res.data);
      });
    };
    handleSubmit(editProfileSubmitted);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setClothingItems(clothingItems);
  };

  const handleCardLike = (item, isLiked, currentUser) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? addCardLike(item._id, currentUser._id, token)
          .then((res) => {
            setClothingItems((clothingItems) =>
              clothingItems.map((card) =>
                card._id === item._id ? res.data : card
              )
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(item._id, currentUser._id, token)
          .then((updatedCard) => {
            setClothingItems((clothingItems) =>
              clothingItems.map((card) =>
                card._id === item._id ? updatedCard.data : card
              )
            );
          })
          .catch((err) => console.log(err));
  };

  // ----------------USE EFFECT ---------------------------

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);

        const forecastData = parseForecastData(data);
        setForecast(forecastData);
        console.log(forecastData);

        const currentTimeOfDay = parseTimeOfDay(data);
        setDay(currentTimeOfDay);
        console.log(currentTimeOfDay);

        const locationData = parseLocationData(data);
        setLocation(locationData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  useEffect(() => {
    getClothingItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getUserInfo(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res.user);
            setLoggedIn(true);
          }
        })
        .catch(console.error);
    }
  }, [loggedIn]);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <CurrentUserContext.Provider value={currentUser}>
          <Header
            onCreateModal={handleCreateModal}
            userLocation={location}
            onLoginModal={handleLoginModal}
            onRegisterModal={handleRegisterModal}
            loggedIn={loggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                type={forecast}
                day={day}
                onCardLike={handleCardLike}
              />
            </Route>
            <ProtectedRoute path="/profile" loggedIn={loggedIn}>
              <Profile
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                onEditProfileModal={handleEditProfileModal}
                onLogout={handleLogout}
                onCardLike={handleCardLike}
              ></Profile>
            </ProtectedRoute>
            <Route exact path="">
              {loggedIn ? <Redirect to="/profile" /> : <Redirect to="/" />}
            </Route>
          </Switch>

          {activeModal === "create" && (
            <AddItemModal
              onClose={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddNewItemSubmit}
              buttonText={isLoading ? "Saving..." : "Add garment"}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              handleDeleteButton={handleOpenConfirmationModal}
              loggedIn={loggedIn}
              currentUser={currentUser}
            />
          )}
          {activeModal === "confirm" && (
            <ConfirmationModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDeleteItem={handleDeleteItemSubmit}
              buttonText={isLoading ? "Deleting..." : "Yes, delete item"}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onClose={handleCloseModal}
              isOpen={activeModal === "login"}
              onLogin={handleLogin}
              setActiveModal={setActiveModal}
              buttonText={isLoading ? "Logging In..." : "Log In"}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              onClose={handleCloseModal}
              isOpen={activeModal === "register"}
              onRegister={handleRegisterSubmit}
              setActiveModal={setActiveModal}
              buttonText={isLoading ? "Registering..." : "Next"}
            />
          )}
          {activeModal === "editProfile" && (
            <EditProfileModal
              onClose={handleCloseModal}
              isOpen={activeModal === "editProfile"}
              onSubmit={handleEditProfileSubmit}
              buttonText={isLoading ? "Saving Changes..." : "Save Changes"}
            />
          )}
          <Footer />
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
