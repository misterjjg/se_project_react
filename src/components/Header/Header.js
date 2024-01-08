import "./Header.css";
import logo from "../../images/main-logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({
  onCreateModal,
  userLocation,
  onLoginModal,
  onRegisterModal,
  loggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const avatar = currentUser ? currentUser.avatar : undefined;
  const showAvatar = avatar !== "" ? true : false;
  const name = currentUser.name;
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__left">
          <Link to="/">
            <img src={logo} alt="WTWR Logo" />
          </Link>
        </div>
        <h3 className="header__date">
          {currentDate} {userLocation}
        </h3>
      </div>
      {loggedIn ? (
        <div className="header__avatar">
          <div className="header__right">
            <ToggleSwitch />

            <button
              className="header__button"
              onClick={onCreateModal}
              type="text"
            >
              + Add Clothes
            </button>
          </div>
          <Link className="header__avatar-name" to="/profile">
            {currentUser.name}
          </Link>
          <div>
            {showAvatar ? (
              <img src={avatar} alt="Avatar Logo" className="header__avatar" />
            ) : (
              <p className="header__avatar-placeholder">
                {name[0]?.toUpperCase()}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="header__right">
          <ToggleSwitch />

          <button
            className="header__button"
            onClick={onRegisterModal}
            type="text"
          >
            Sign Up
          </button>

          <button className="header__button" onClick={onLoginModal} type="text">
            Log In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
