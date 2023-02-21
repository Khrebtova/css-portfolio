import React from "react";
import Details from "../details/details";
import "../frame/Frame.scss";
import "./day-6.scss";
import IMG from "../../assets/me_1.jpg";

const Day6 = () => {
  return (
    <div>
      <div className="frame-day-6 frame">
        <div className="center-day-6">
          <div className="profile">
            <div className="profile-picture">
              <div className="frame-circle-1"></div>
              <div className="frame-circle-2"></div>
              <img src={IMG} alt="profile-img" className="profile-img" />
            </div>
            <span className="profile-name">Kseniia McFadden</span>
            <span className="profile-job">Developer</span>
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
      <Details
        title="Day-6"
        action="Hover over profile"
        linkURL="https://codepen.io/Khrebtova/pen/XWBqLbV?editors=1000"
      />
    </div>
  );
};

export default Day6;
