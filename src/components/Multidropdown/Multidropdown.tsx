import React from "react";
import "./Multidropdown.scss";
import ArrowDownIcon from "../ArrowDownIcon/ArrowDownIcon";

const Multidropdown = () => {
  return (
    <div className="categories">
      <input className="dropdown" type="text" placeholder="Categories" />
      <ArrowDownIcon />
    </div>
  );
};

export default Multidropdown;
