import React from "react";
import Details from "../details/details";
import "./day-10.scss";

const Day10 = () => {
  return (
    <div>
      <div className="frame day-10-frame">
        <div className="day-10-watch">
          <div className="spinner"></div>
          <div className="dots"></div>
          <div className="watch-display">
            <div className="calendar"> THUR 23 FEB 2023</div>
            <div className="time"> 11:42 </div>
            <div className="biometrics">
              <span className="material-symbols-outlined heart">favorite</span>
              <div className="pulse">81</div>
              <div className="calories">1248 KCAL</div>
            </div>
          </div>
        </div>
      </div>
      <Details
        title="Day 10"
        linkURL="https://codepen.io/Khrebtova/pen/dyqXKPO?editors=1100"
      />
    </div>
  );
};

export default Day10;
