import React, { useState } from "react";
import Details from "../details/details";
import "./day-7.scss";

const Day7 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const notifications = [
    {
      id: 1,
      user: "John Walker",
      time: "9:24 AM",
      message: "posted a photo on your wall.",
    },
    {
      id: 2,
      user: "Alice Parker",
      time: "8:19 AM",
      message: "commented your last post.",
    },
    {
      id: 3,
      user: "Luke Wayne",
      time: "Yesterday",
      message: "added you as friend.",
    },
  ];

  const menuItems = [
    {
      icon: "speed",
      title: "Dashboard",
    },
    {
      icon: "person",
      title: "Profile",
    },
    {
      icon: "notifications",
      title: "Notifications",
    },
    {
      icon: "forum",
      title: "Messages",
    },
    {
      icon: "settings",
      title: "Settings",
    },
  ];

  const handleMenuClick = () => {
    setShowPopup(!showPopup);
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const renderNotifications = notifications.map((notification) => (
    <div className="notification" key={notification.id}>
      <div className="circle"></div>
      <span className="time">{notification.time}</span>
      <p>
        <b>{notification.user}</b> {notification.message}
      </p>
    </div>
  ));

  const renderMenu = menuItems.map((item) => (
    <div className="menu-item" key={item.title}>
        <span className="material-symbols-outlined icon">{item.icon}</span>
        <span className="menu-item-title">{item.title}</span>
    </div>
  ))

  return (
    <div>
      <div className="day-7-frame">        
        <div className={showPopup ? "day-7-center active" : "day-7-center"}>
          <div className="day-7-header">
            <div className="day-7-menu-icon" onClick={handleMenuClick}>
              <div className="top-dash"></div>
              <div className="bottom-dash"></div>
              <div className="menu-dot"></div>
            </div>
            <div className="day-7-title">Notifications</div>
            <div className="day-7-search-btn" onClick={handleSearchClick}>
              <div className="search-circle"></div>
              <div className="search-pip"></div>
            </div>
            <input
              className={
                showSearch ? "day-7-input-search active" : "day-7-input-search"
              }
              placeholder="Search ..."
            />
          </div>
          <div className="day-7-content">
            <div className="line"></div>
            {renderNotifications}
          </div>
        </div>
        <div className={showPopup ? "day-7-popup active" : "day-7-popup"}>
            {renderMenu}          
        </div>
      </div>
      <Details
        title="Day 7"
        linkURL="https://codepen.io/Khrebtova/pen/LYBrJdG"
        action="Click the menu icon and the search button."
      />
    </div>
  );
};

export default Day7;
