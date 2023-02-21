import React from "react";
import "../frame/Frame.scss";
import "./day-8.scss";
import Details from "../details/details";

const Day8 = () => {
  const renderblubbs = () => {
    const blubbs = [];
    for (let i = 1; i <= 10; i++) {
      blubbs.push(<div className={`blubb-${i}`}></div>);
    }
    return blubbs;
  };

  const rendersparkles = () => {
    const sparkles = [];
    for (let i = 1; i <= 10; i++) {
      sparkles.push(<div className={`sparkle-${i}`}></div>);
    }
    return sparkles;
  };

  return (
    <div>
      <div className="frame day-8-frame">
        <div className="day-8-center">
          <div className="ball"></div>
          {renderblubbs()}
          {rendersparkles()}
        </div>
      </div>
      <Details
        title="Day 8"
        linkURL="https://codepen.io/Khrebtova/pen/WNgwxdp"
      />
    </div>
  );
};

export default Day8;
