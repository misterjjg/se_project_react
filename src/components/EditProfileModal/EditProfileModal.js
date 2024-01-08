import React, { useContext, useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ onClose, isOpen, onSubmit, buttonText }) => {
  const token = localStorage.getItem("jwt");

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const currentUser = useContext(CurrentUserContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, avatar, token);
  };

  useEffect(() => {
    if (!isOpen) {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Change Profile Info"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      modalName={"editProfile"}
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
    </ModalWithForm>
  );
};

export default EditProfileModal;
