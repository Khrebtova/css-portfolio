import React from "react";
import Details from "../details/details";
import './day-12.scss';

const Day12 = () => {
  return (
    <div>
      <div className="frame day-12-frame">
        <div className="quotes">,,</div>
        <div className="text">
          <p>
            I know quite certainly that I myself have no special talent;
            curiosity, 
            <span className="hoverable">
              obsession
              <span className="tooltip">
                <span className="transcript">
                  [əb`seʃ(ə)n]
                  <span className="material-symbols-outlined">volume_up</span>{" "}
                </span>
                <span className="description">
                  <b> Obsession</b>, a persistent disturbing preoccupation with
                  an often unreasonable idea or feeling.
                </span>
              </span>
            </span>
             and dogged endurance, combined with self-criticism have brought me
            to my ideas.
          </p>
        </div>
        <div className="author">Albert Einstein</div>
      </div>
      <Details
        title="Day 12"
        linkURL="https://codepen.io/Khrebtova/pen/MWqjmLY?editors=0100"
        action="Hover over the Obsession"
      />
    </div>
  );
};

export default Day12;
