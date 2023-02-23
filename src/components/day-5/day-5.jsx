import React from "react";
import Details from "../details/details";
import '../frame/Frame.scss';
import "./day-5.scss";

const Day5 = () => {
  return (
    <div>
      <div className="day-5-frame frame">
        <div className="day-5-report-card">
          <div className="report-header">
            <span className="title">WEEKLY REPORT</span>
            <span className="date">01. Feb - 07. Feb</span>
            <span className="type">Revenue</span>
            <span className="value">$ 3621.79</span>
          </div>
          <div className="report-params">
            <span className="red">Views</span>
            <span className="blue">Purchases</span>
          </div>
          <div className="report-graph">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="graph red">
              <svg>
                <polyline points="9,46 50,12 90,23 130,11 171,38 211,48 251,19"></polyline>
              </svg>
              <div className="point mon">
                <div className="tooltip">458</div>
              </div>
              <div className="point tue">
                <div className="tooltip">813</div>
              </div>
              <div className="point wed">
                <div className="tooltip">746</div>
              </div>
              <div className="point thur">
                <div className="tooltip">877</div>
              </div>
              <div className="point fri">
                <div className="tooltip">512</div>
              </div>
              <div className="point sat">
                <div className="tooltip">430</div>
              </div>
              <div className="point sun">
                <div className="tooltip">700</div>
              </div>
            </div>
            <div className="graph blue">
              <svg>
                <polyline points="8,61 50,50 90,65 130,55 171,61 211,74 251,64"></polyline>
              </svg>
              <div className="point mon">
                <div className="tooltip">26</div>
              </div>
              <div className="point tue">
                <div className="tooltip">41</div>
              </div>
              <div className="point wed">
                <div className="tooltip">22</div>
              </div>
              <div className="point thur">
                <div className="tooltip">36</div>
              </div>
              <div className="point fri">
                <div className="tooltip">25</div>
              </div>
              <div className="point sat">
                <div className="tooltip">13</div>
              </div>
              <div className="point sun">
                <div className="tooltip">20</div>
              </div>
            </div>
          </div>
          <div className="report-days">
            <span className="day">MON</span>
            <span className="day">TUE</span>
            <span className="day">WED</span>
            <span className="day">THR</span>
            <span className="day">FRI</span>
            <span className="day">SAT</span>
            <span className="day">SUN</span>
          </div>
        </div>
      </div>
      <Details
        title="Day 5"
        linkURL="https://codepen.io/Khrebtova/pen/abjqeJm?editors=1100"
        action='Hover over stats points'
      />
    </div>
  );
};

export default Day5;
