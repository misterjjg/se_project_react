import React, { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const AddItemModal = ({ onClose, onAddItem, isOpen, buttonText }) => {
  const [name, setName] = useState("");
  const [weatherType, setWeatherType] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weatherType });
  };

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setImageUrl("");
      setWeatherType("");
    }
  }, [isOpen]);

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
          maxLength="100"
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
          placeholder="Image URL"
          required
          className="modal__input"
          value={imageUrl}
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
