import React from "react";
import Details from "../details/details";
import '../frame/Frame.scss';
import "./day-3.scss";

const Day3 = () => {
  return (
    <div>
      <div className="day-3-frame frame">
        <div className="day-3-center">
          <div className="window">
            <div className="sky"></div>
            <div className="sun"></div>
            <div className="pyramid-left"></div>
            <div className="pyramid-right"></div>
            <div className="shadow"></div>
            <div className="sand"></div>
          </div>
        </div>
      </div>
      <Details
        title="Day 3"
        linkURL="https://codepen.io/Khrebtova/pen/QWBOdvo"
      />
    </div>
  );
};

export default Day3;
