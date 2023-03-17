import React, { useState } from "react";
import Details from "../details/details";
import "./day-15.scss";

const Day15 = () => {
const [file, setFile] = useState(null);
const [stage, setStage] = useState("start");

const handleUpload = (e) => {
    const fileNameArray = e.target.files[0].name.split('');
    let fileName;
    fileNameArray.length > 40 ?   fileName = fileNameArray.slice(0, 40).join('') + "..." : fileName = fileNameArray.join('');
    console.log(fileName);
    setFile(fileName);    
}

  return (
    <div>
      <div className="frame day-15-frame">
        <div className="day-15-center">
          <div className="header">Drop file to upload</div>
          <div className="upload-field">
            <div className="content"> 
              <input type="file" className="input" onChange={handleUpload}/>
              {file && <div className="file-name">{file}</div>}
              <span className="material-symbols-outlined cloud">
                cloud_upload
              </span>

            </div>
          </div>
          <div className="button">Upload file</div>
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
