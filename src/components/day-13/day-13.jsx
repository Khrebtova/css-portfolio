import React, { useState } from "react";
import Details from "../details/details";
import { BsPlusCircleFill } from "react-icons/bs";
import {
  AiFillMessage,
  AiFillPhone,
  AiFillHeart,
  AiFillCloseCircle,
} from "react-icons/ai";
import "./day-13.scss";

const Day13 = () => {
  const [profileVisible, setProfileVisible] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState(1);

  const profiles = [
    {
      id: 1,
      img: "https://100dayscss.com/codepen/13-1.jpg",
      alt: "img1",
      name: "Julia Toth",
    },
    {
      id: 2,
      img: "https://100dayscss.com/codepen/13-2.jpg",
      alt: "img2",
      name: "John Doe",
    },
    {
      id: 3,
      img: "https://100dayscss.com/codepen/13-3.jpg",
      alt: "img3",
      name: "Jane Miller",
    },
    {
      id: 4,
      img: "https://100dayscss.com/codepen/13-4.jpg",
      alt: "img4",
      name: "Jess Brown",
    },
  ];

  const selectedProfile = profiles.find(
    (profile) => profile.id === selectedProfileId
  );
  const renderProfiles = () => {
    return profiles.map((profile) => {
      return (
        <div
          className="profile"
          id={`profile-${profile.id}`}
          key={profile.id}
          onClick={() => {
            setProfileVisible(true);            
            setSelectedProfileId(profile.id);
          }}
        >
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
      <div className="frame day-13-frame">
        <div
          className={
            profileVisible ? "profile-details open" : "profile-details closing"
          }
        >
          <div
            className="close-button"
            onClick={() => {
              setProfileVisible(false);              
            }}
          >
            <AiFillCloseCircle />
          </div>
          <div className="header">
            <img
              src="https://100dayscss.com/codepen/13-1-header.jpg"
              alt="header"
            />
          </div>
          <div className="details">
            <div className="name">{selectedProfile.name}</div>
            <div className="buttons">
              <div className="button">
                <AiFillMessage />
              </div>
              <div className="button">
                <AiFillPhone />
              </div>
              <div className="button">
                <AiFillHeart />
              </div>
            </div>
          </div>
          <div className="profile-picture">
            <img src={selectedProfile.img} alt="profile" />
          </div>
        </div>
        <div className="profiles-container">{renderProfiles()}</div>
      </div>
      <Details
        title="Day 13"
        linkURL="https://codepen.io/Khrebtova/pen/MWqjmLY?editors=0100"
        action="Click on profiles"
      />
    </div>
  );
};

export default Day13;

