// import logo from "./logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [temp, setTemp] = useState(0);

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

  useEffect(() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
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

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label>
            <p className="modal__input-title">Name</p>
            <input
              type="text"
              name="name"
              minLength="1"
              maxLength="30"
              placeholder="Name"
              required
              className="modal__input"
            ></input>
          </label>
          <label>
            <p className="modal__input-title">Image</p>
            <input
              type="url"
              name="link"
              minLength="1"
              placeholder="Image URL"
              required
              className="modal__input"
            />
          </label>
          <p className="modal__weather-section">Select the weather type: </p>
          <div className="modal__radio-section">
            <div className="modal__radio-option">
              <input
                type="radio"
                id="hot"
                value="hot"
                className="modal__radio-button"
              />
              <label className="modal__radio-weather">Hot</label>
            </div>
            <div className="modal__radio-option">
              <input
                type="radio"
                id="warm"
                value="warm"
                className="modal__radio-button"
              />
              <label className="modal__radio-weather">Warm</label>
            </div>
            <div className="modal__radio-option">
              <input
                type="radio"
                id="cold"
                value="cold"
                className="modal__radio-button"
              />
              <label className="modal__radio-weather">Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
