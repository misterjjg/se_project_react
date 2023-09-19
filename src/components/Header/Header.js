import "./Header.css";
import logo from "../../images/main-logo.svg";
import avatar from "../../images/avatar.svg";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="main-logo" />
        </div>
        <div className="header__date">September 19, San Francisco</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__button"
          >
            + Add Clothes
          </button>
        </div>
        <div className="header__avatar-name">Terrence Tegegne</div>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
