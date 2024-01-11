import React, { useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ onClose, isOpen, onSubmit, buttonText }) => {
  const token = localStorage.getItem("jwt");
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(`${currentUser.name}`);
  const [avatar, setAvatar] = useState(`${currentUser.avatar}`);

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

  // useEffect(() => {
  //   if (!isOpen) {
  //     setName(currentUser.name);
  //     setAvatar(currentUser.avatar);
  //   }
  // }, [isOpen]);

  return (
    <ModalWithForm
      title="Change Profile Info"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      name={"editProfile"}
    >
      <div className="modal__text-inputs">
        <label className="modal__label">
          Name
          <input
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            className="modal__input"
            value={`${name}`}
            onChange={handleNameChange}
          ></input>
        </label>
        <label className="modal__label">
          Avatar URL
          <input
            type="url"
            name="link"
            placeholder="Avatar URL"
            className="modal__input"
            value={`${avatar}`}
            onChange={handleAvatarChange}
          ></input>
        </label>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
