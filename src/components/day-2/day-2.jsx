import React, { useState } from "react";
import Details from "../details/details";
import '../frame/Frame.scss';
import "./day-2.css";

const Day2 = () => {
  const [menuClass, setMenuClass] = useState("not-active");

  const handleChangeClass = () => {
    menuClass === "active"
      ? setMenuClass("not-active")
      : setMenuClass("active");
  };

  return (
    <div>
      <div className="day-2-frame frame">
        <div className="day-2-center">
          <div
            id="menu"
            className={menuClass}
            onClick={() => handleChangeClass()}
          >
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </div>
      </div>
      <Details
        title="Day 2"
        linkURL="https://codepen.io/Khrebtova/pen/poZPdJN"
        action="Click Menu Button"
      />
    </div>
  );
};

export default Day2;
