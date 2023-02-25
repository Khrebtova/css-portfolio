import React from "react";
import Details from "../details/details";
import { BsPlusCircleFill } from "react-icons/bs";
import "./day-13.scss";

const Day13 = () => {
  const profiles = [
    { id: 1, img: "https://100dayscss.com/codepen/13-1.jpg", alt: "img1" },
    { id: 2, img: "https://100dayscss.com/codepen/13-2.jpg", alt: "img2" },
    { id: 3, img: "https://100dayscss.com/codepen/13-3.jpg", alt: "img3" },
    { id: 4, img: "https://100dayscss.com/codepen/13-4.jpg", alt: "img4" },
  ];

  const renderProfiles = () => {
    return profiles.map((profile) => {
      return (
        <div className="profile" id={`profile-${profile.id}`} key={profile.id}>
          <div className="plus">
            <BsPlusCircleFill />
          </div>
          <div className="overlay"></div>
          <img src={profile.img} alt={profile.alt} />
        </div>
      );
    });
  };
  return (
    <div>
      <div className="frame day-13-frame">{renderProfiles()}</div>
      <Details
        title="Day 12"
        linkURL="https://codepen.io/Khrebtova/pen/MWqjmLY?editors=0100"
        action="WORK IN PROGRESS"
      />
    </div>
  );
};

export default Day13;
