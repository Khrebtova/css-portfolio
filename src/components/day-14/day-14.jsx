import React from "react";
import Details from "../details/details";
import "./day-14.scss";

const Day14 = () => {
    const renderRoad = () => {
        const road = [];
        for (let i = 0; i < 8; i++) {
            road.push(<div className={`stripe-${i + 1}`}></div>);
        }
        return road;
    }

    const renderClouds = () => {
        const clouds = [];
        for (let i = 0; i < 10; i++) {
            clouds.push(<div className={`cloud-${i + 1}`}></div>);
        }
        return clouds;
    }
  return (
    <div>
      <div className="frame day-14-frame">
        <div className="day-14-card">
          <div className="flip">
            <div className="front">
              <img
                src="https://100dayscss.com/codepen/bycicle.svg"
                alt="bike"
              />
              <div className="road">
                {renderRoad()}
              </div>
            </div>
            <div className="back">
              <img
                src="https://100dayscss.com/codepen/helicopter.svg"
                alt="helicopter"
              />
              <div className="sky">
                {renderClouds()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Details
        title="Day 14"
        linkURL="https://codepen.io/Khrebtova/pen/PodEKGN"
        action="Hover over the card"
      />
    </div>
  );
};

export default Day14;
