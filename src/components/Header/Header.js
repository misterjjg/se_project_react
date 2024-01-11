import "./Header.css";
import logo from "../../images/main-logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
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
      <div className="header__menu-left">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="WTWR Logo" className="header__logo-image" />
          </Link>
        </div>
        <h3 className="header__date">
          {currentDate} {userLocation}
        </h3>
      </div>
      {loggedIn ? (
        <div className="header__menu-right">
          <ToggleSwitch />
          <div className="header__menu-buttons">
            <button
              className="header__add-button"
              onClick={onCreateModal}
              type="text"
            >
              + Add Clothes
            </button>
          </div>

          <Link className="header__name" to="/profile">
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
        <div className="header__menu-right">
          <ToggleSwitch />
          <div className="header__menu-buttons">
            <button
              className="header__add-button"
              onClick={onRegisterModal}
              type="text"
            >
              Sign Up
            </button>

            <button
              className="header__add-button"
              onClick={onLoginModal}
              type="text"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
