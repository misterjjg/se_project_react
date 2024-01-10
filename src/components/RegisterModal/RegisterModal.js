import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  onClose,
  isOpen,
  onRegister,
  setActiveModal,
  buttonText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password, name, avatar);
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleRegisterSubmit}
      buttonText={buttonText}
      modalName={"register"}
    >
      <label>
        <p className="modal__input-title">Email*</p>
        <input
          type="text"
          name="email"
          minLength="1"
          maxLength="100"
          placeholder="Email"
          required
          className="modal__input"
          value={email}
          onChange={handleEmailChange}
        ></input>
      </label>
      <label>
        <p className="modal__input-title">Password*</p>
        <input
          type="text"
          name="password"
          minLength="1"
          maxLength="30"
          placeholder="Password"
          required
          className="modal__input"
          value={password}
          onChange={handlePasswordChange}
        ></input>
      </label>
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
        <p className="modal__input-title">Avatar URL</p>
        <input
          type="url"
          name="link"
          placeholder="Avatar URL"
          required
          className="modal__input"
          value={avatar}
          onChange={handleAvatarChange}
        ></input>
      </label>
      <div>
        <button
          type="button"
          className="modal__submit-button modal_submit-button2"
          onClick={handleLoginClick}
        >
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
