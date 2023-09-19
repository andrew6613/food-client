import React from "react";
import "./Main.scss";
import SearchIcon from "../SearchIcon/SearchIcon";
import Multidropdown from "../Multidropdown/Multidropdown";

const Main = () => {
  return (
    <div className="main">
      <div className="text">
        Find the perfect food and <span>drink ideas</span> for every occasion,
        from <span>weeknight dinners</span> to <span>holiday feasts</span>.
      </div>
      <div className="search">
        <input placeholder="Enter dishes" />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className="drop">
        <Multidropdown />
      </div>
    </div>
  );
};

export default Main;
