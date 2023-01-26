import React from "react";
import Details from "../details/details";
import "./day-6.scss";

const Day6 = () => {
  return (
    <div>
      <div className="frame-day-6">
        <div className="center-day-6">
          <div className="profile">
            <div className="profile-picture">
              <div className="frame-circle-1"></div>
              <div className="frame-circle-2"></div>
              <img
                src="https://100dayscss.com/codepen/jessica-potter.jpg"
                alt="profile-img"
                className="profile-img"
              />
            </div>
            <span className="profile-name">Jessica Potter</span>
            <span className="profile-job">Visual Artist</span>
            <div className="profile-buttons">
              <div className="profile-btn"> Follow </div>
              <div className="profile-btn"> Message </div>
            </div>
          </div>
          <div className="stats">
            <div className="stats-box">
              <span className="stats-value">523</span>
              <span className="stats-name">Posts</span>
            </div>
            <div className="stats-box">
              <span className="stats-value">1387</span>
              <span className="stats-name">Likes</span>
            </div>
            <div className="stats-box">
              <span className="stats-value">146</span>
              <span className="stats-name">Followers</span>
            </div>
          </div>
        </div>
      </div>
      <Details title="Day-6" action="Hover over profile" linkURL="https://codepen.io/Khrebtova/pen/XWBqLbV?editors=1000"/>
    </div>
  );
};

export default Day6;
