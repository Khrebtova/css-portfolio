import React from "react";
import Details from "../details/details";
import "./day-1.css";

const Day1 = () => {
  return (
    <div>
      <div className="day-1-frame">
        <div className="day-1-center">
          <div className="numbers">
            <div className="one-pip"></div>
            <div className="one"></div>
            <div className="zero-first"></div>
            <div className="zero-second"></div>
          </div>
          <div className="letters">
            <h2>DAYS</h2>
            <p>CSS CHALLENGE</p>
          </div>
        </div>
      </div>
      <Details
        title="Day 1"
        linkURL="https://codepen.io/Khrebtova/pen/KKBmvqB"
      />
    </div>
  );
};

export default Day1;
