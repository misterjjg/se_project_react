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
import {
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom/cjs/react-router-dom";
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

  const handleCreateModal = () => {
    setActiveModal("create");
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
    };
    const newClothingRequest = () => {
      return addNewClothingItem(item).then((item) => {
        setClothingItems([item, ...clothingItems]);
      });
    };
    handleSubmit(newClothingRequest);
  };

  const handleDeleteItemSubmit = (selectedCard) => {
    const deleteCardRequest = () => {
      return deleteClothingItems(selectedCard).then(() => {
        const newItem = clothingItems.filter((item) => {
          return item._id !== selectedCard;
        });
        setClothingItems(newItem);
      });
    };
    handleSubmit(deleteCardRequest);
  };

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

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} userLocation={location} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              type={forecast}
              day={day}
            />
          </Route>
          <Route path="/profile">
            <Profile
              clothingItems={clothingItems}
              onSelectCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
            ></Profile>
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
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
