import "./Header.css";
import logo from "../../images/main-logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal, userLocation }) => {
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
          Terrence Tegegne
        </Link>
        <div>
          <img src={avatar} alt="Avatar Logo" className="header__avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
