import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  onClose,
  isOpen,
  onLogin,
  setActiveModal,
  buttonText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  const handleRegisterClick = (e) => {
    setActiveModal("register");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Log In"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleLoginSubmit}
      buttonText={buttonText}
      name={"login"}
    >
      <div className="modal__text-inputs">
        <label className="modal__label">
          Email
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
        <label className="modal__label">
          Password
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
      </div>
      <div>
        <button
          type="button"
          className="modal__submit-button modal__submit-button2"
          onClick={handleRegisterClick}
        >
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
