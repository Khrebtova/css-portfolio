import React, { useState } from "react";
import Details from "../details/details";
import "./day-15.scss";

const Day15 = () => {
  const [file, setFile] = useState(null);
  const [stage, setStage] = useState("start");
  
  const handleUpload = (e) => {
    const fileNameArray = e.target.files[0].name.split("");
    let fileName =
      fileNameArray.length > 40
        ? fileNameArray.slice(0, 40).join("") + "..."
        : fileNameArray.join("");
    console.log(fileName);
    setFile(fileName);
  };

  const handleClickUpload = () => {
    if (!file) {
      alert("Please select a file");
    } else {
      setStage("uploading");
      setFile(null);
      setTimeout(() => {
        setStage("done");
      }, 3000);
    }
  };

  const handleClickReset = () => {
    setStage("start");
    setFile(null);    
  };

  const renderButton = () => {
    switch (stage) {
      case "uploading":
        return <div className="button">Uploading...</div>;
      case "done":
        return (
          <div className="button" onClick={handleClickReset}>
            Done!
          </div>
        );
      default:
        return (
          <div className="button" onClick={handleClickUpload}>
            Upload file
          </div>
        );
    }
  };

  const renderHeaderAnimation = () => {
    switch (stage) {
      case "uploading":
        return <div className="header-line uploading"></div>;
      case "done":
        return <div className="header-line done"></div>;
      default:
        return <div className="header-line"></div>;
    }
  };
  
  return (
    <div>
      <div className="frame day-15-frame">
        <div className="day-15-center">
          <div className="header">Drop file to upload</div>
          {renderHeaderAnimation()}
          <div
            className={
              stage === "start" ? "upload-field" : "upload-field uploading"
            }
          >
            {stage === "done" ? (
              <span className="material-symbols-outlined check">check</span>
            ) : null}
            {stage === "uploading" ? (
              <span className="material-symbols-outlined loading">
                autorenew
              </span>
            ) : null}
            <div className="content">
              <input type="file" className="input" onChange={handleUpload} />
              {file && <div className="file-name">{file}</div>}
              {stage === "start" ? (
                <span className="material-symbols-outlined cloud">
                  cloud_upload
                </span>
              ) : null}
            </div>
          </div>
          {renderButton()}
        </div>
      </div>
      <Details
        title="Day 15"
        linkURL="https://codepen.io/Khrebtova/pen/PodEKGN"
        action="Work in progress"
      />
    </div>
  );
};

export default Day15;
