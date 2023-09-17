import React from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import SavedIcon from "../SavedIcon/SavedIcon";
import UserIcon from "../UserIcon/UserIcon";

const navlinks = [
  "Recipes",
  "Ingradients",
  "Products",
  "Menu Items",
  "Meal Planning",
];

const Header = () => {
  return (
    <div className="wrapper">
      <div className="logo">
        <Logo size={36} />
        Food Client
      </div>
      <nav className="navlist">
        <ul className="navlist_ul">
          {navlinks.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      </nav>
      <div className="user">
        <SavedIcon size={17} />
        <UserIcon size={24} />
      </div>
    </div>
  );
};

export default Header;
