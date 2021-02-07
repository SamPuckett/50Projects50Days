import { useState } from "react";

import NavBar from "../shared/NavBar/NavBar";
import "./ProgressSteps.css";

const circles = 4;

const ProgressSteps = () => {
  const [currentActiveStep, setCurrentActiveStep] = useState(1);

  const handlePrevButtonClick = () => {
    console.log(
      `handlePrevButtonClick, currentActiveStep = ${currentActiveStep}`
    );
    setCurrentActiveStep((prevState) => prevState - 1);
  };

  const handleNextButtonClick = () => {
    console.log(
      `handleNextButtonClick, currentActiveStep = ${currentActiveStep}`
    );
    setCurrentActiveStep((prevState) => prevState + 1);
  };

  return (
    <div className="progress-steps">
      <NavBar>Progress Steps</NavBar>
      <div className="container">
        <div className="progress-container">
          <div
            className="progress"
            id="progress"
            style={{
              width: ((currentActiveStep - 1) / (circles - 1)) * 100 + "%",
            }}
          ></div>
          <div className={currentActiveStep >= 1 ? "circle active" : "circle"}>
            1
          </div>
          <div className={currentActiveStep >= 2 ? "circle active" : "circle"}>
            2
          </div>
          <div className={currentActiveStep >= 3 ? "circle active" : "circle"}>
            3
          </div>
          <div className={currentActiveStep >= 4 ? "circle active" : "circle"}>
            4
          </div>
        </div>
        <button
          onClick={handlePrevButtonClick}
          className="btn"
          id="prev"
          disabled={currentActiveStep >= 2 ? false : true}
        >
          Prev
        </button>
        <button
          onClick={handleNextButtonClick}
          className="btn"
          id="next"
          disabled={currentActiveStep <= 3 ? false : true}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressSteps;
