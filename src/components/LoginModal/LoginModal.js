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
      modalName={"login"}
    >
      <label>
        <p className="modal__input-title">Email</p>
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
        <p className="modal__input-title">Password</p>
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
      <div>
        <button
          type="button"
          className="modal__submit-button modal_submit-button2"
          onClick={handleRegisterClick}
        >
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
