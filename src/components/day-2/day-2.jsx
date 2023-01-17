import React, { useState } from "react";
import "./day-2.css";

const Day2 = () => {
  const [menuClass, setMenuClass] = useState("not-active");

  const handleChangeClass = () => {
    menuClass === "active"
      ? setMenuClass("not-active")
      : setMenuClass("active");
  };

  return (
    <div className="day-2-frame">
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
  );
};

export default Day2;
