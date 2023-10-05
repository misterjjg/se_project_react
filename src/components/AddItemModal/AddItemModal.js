import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const AddItemModal = ({ onClose, onAddItem, isOpen, buttonText }) => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");

  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, weather, link });
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
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
          value={name}
          onChange={handleNameChange}
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
          value={link}
          onChange={handleUrlChange}
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
            name="weatherType"
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-weather" htmlFor="hot">
            Hot
          </label>
        </div>
        <div className="modal__radio-option">
          <input
            type="radio"
            id="warm"
            value="warm"
            className="modal__radio-button"
            name="weatherType"
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-weather" htmlFor="warm">
            Warm
          </label>
        </div>
        <div className="modal__radio-option">
          <input
            type="radio"
            id="cold"
            value="cold"
            className="modal__radio-button"
            name="weatherType"
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-weather" htmlFor="cold">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
