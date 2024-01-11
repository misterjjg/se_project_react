import React, { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const AddItemModal = ({ onClose, onAddItem, isOpen, buttonText }) => {
  const token = localStorage.getItem("jwt");

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
    onAddItem({ name, imageUrl, weatherType, token });
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
      <div className="modal__text-inputs">
        <label className="modal__label">
          Name
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
        <label className="modal__label">
          Image
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
      </div>
      <p className="modal__select-weather">Select the weather type: </p>
      <div className="modal__radio-inputs">
        <div>
          <input
            type="radio"
            id="hot"
            value="hot"
            className="modal__radio-button"
            name="weatherType"
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-button-label" htmlFor="hot">
            Hot
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="warm"
            value="warm"
            className="modal__radio-button"
            name="weatherType"
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-button-label" htmlFor="warm">
            Warm
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="cold"
            value="cold"
            className="modal__radio-button"
            name="weatherType"
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-button-label" htmlFor="cold">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
