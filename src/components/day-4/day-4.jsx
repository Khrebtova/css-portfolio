import React from "react";
import Details from "../details/details";
import '../frame/Frame.scss';
import "./day-4.css";

const Day4 = () => {
  return (
    <div>
      <div className="day-4-frame frame">
        <div className="day-4-center">
          <div className="circle big"></div>
          <div className="circle medium"></div>
          <div className="circle small"></div>
        </div>
      </div>
      <Details title="Day 4" linkURL="https://codepen.io/Khrebtova/pen/ZEjXEbG" />
    </div>
  );
};

export default Day4;
