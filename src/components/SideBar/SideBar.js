import "./SideBar.css";
// import avatar from "./../../images/avatar.svg";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ onEditProfileModal, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);

  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <div className="sidebar">
      <div>
        <img
          className="sidebar__avatar"
          src={currentUser.avatar}
          alt="Avatar Logo"
        />
      </div>
      <p className="sidebar__name">{currentUser.name}</p>
      <div className="sidebar__button-container">
        <button
          className="sidebar__button"
          type="button"
          onClick={onEditProfileModal}
        >
          Change Profile Data
        </button>
        <button
          className="sidebar__button"
          type="button"
          onClick={handleLogoutClick}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
