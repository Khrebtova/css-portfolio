import React from "react";
import Details from "../details/details";
import "./day-9.scss";
import "../frame/Frame.scss";
const Day9 = () => {
  const renderCraters = () => {
    const craters = [];
    for (let i = 1; i <= 8; i++) {
      craters.push(<div className={`crater-${i}`} key={`crater-${i}`}></div>);
    }
    return craters;
  };

  const renderHills = () => {
    const hills = [];
    for (let i = 1; i <= 5; i++) {
      hills.push(<div className={`hill-${i}`} key={`hill-${i}`}> </div>);
    }
    return hills;
  };

  const renderDropsBig = () => {
    const dropsBig = [];
    for (let i = 1; i <= 10; i++) {
      dropsBig.push(<div className={`drop drop-big-${i}`} key={`drop-big-${i}`}></div>);
    }
    return dropsBig;
  };

  const renderDropsMedium = () => {
    const dropsMedium = [];
    for (let i = 1; i <= 10; i++) {
      dropsMedium.push(<div className={`drop drop-medium-${i}`} key={`drop-medium-${i}`}></div>);
    }
    return dropsMedium;
  }

  const renderDropsSmall = () => {
    const dropsSmall = [];
    for (let i = 1; i <= 10; i++) {
      dropsSmall.push(<div className={`drop drop-small-${i}`} key={`drop-small-${i}`}></div>);
    }
    return dropsSmall;
  }

  return (
    <div>
      <div className="frame day-9-frame">
        {/* <p>Work in progress</p> */}
        <div className="day-9-window">
          <div className="moon">{renderCraters()}</div>
          {renderDropsBig()}
          {renderDropsMedium()}
          {renderDropsSmall()}
          
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
      <Details title="Day 9" linkURL="https://codepen.io/Khrebtova/pen/xxaVRNW?editors=1100" />
    </div>
  );
};

export default Day9;
