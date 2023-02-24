import React from "react";
import Details from "../details/details";
import "./day-11.scss";

const Day11 = () => {
  return (
    <div>
      <div className="frame day-11-frame">
        <div className="person">
          <div className="leg left">
            <div className="shoe"></div>
          </div>
          <div className="leg right">
            <div className="shoe"></div>
          </div>
        </div>
        <div className="floor">
            <div className="stripe-1"></div>
            <div className="stripe-2"></div>
            <div className="stripe-3"></div>
            <div className="stripe-4"></div>
        </div>
      </div>
      <Details
        title="Day 11"
        linkURL="https://codepen.io/Khrebtova/pen/qBMNJON?editors=1100"
      />
    </div>
  );
};

export default Day11;
