import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollArrow = () => (
  <span id="scroll-top-container" className="scroll-top-container">
    <div className="scroll-top">
      <FontAwesomeIcon icon={faAngleUp} color="white" />
    </div>
  </span>
);

export default ScrollArrow;
