import React from "react";
import Details from "../details/details";
import "./day-9.scss";
import "../frame/Frame.scss";
const Day9 = () => {
  const renderCraters = () => {
    const craters = [];
    for (let i = 1; i <= 8; i++) {
      craters.push(<div className={`crater-${i}`}></div>);
    }
    return craters;
  }

  const renderHills = () => {
    const hills = [];
    for (let i = 1; i < 5; i++) {
      hills.push(<div className={`hill-${i}`}></div>);
    }
    return hills;
  }
  return (
    <div>
      <div className="frame day-9-frame">
        <p>Work in progress</p>
        <div className="day-9-window">
          <div className="moon">
            {renderCraters()}
          </div>
          {renderHills()}
        </div>
        <div className="day-9-report-card">
          <div className="temperature">12°</div>
          <div className="details">
            <p>Wind: E 11 km/h</p>
            <p>Humidity: 80%</p>            
          </div>
          <div className="next-day-forecast">
            <div className="days">
                TUE 
                <br />
                WED
            </div>
            <div className="temperatures">
                21° / 9°
                <br />
                24° / 10°
            </div>
          </div>
        </div>
      </div>
      <Details title="Day 9" />
    </div>
  );
};

export default Day9;
