import "./SideBar.css";
import avatar from "./../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <img className="sidebar__avatar" src={avatar} alt="Avatar Logo" />
      </div>
      <p className="sidebar__name">Terrence Tegegne</p>
    </div>
  );
};

export default SideBar;
