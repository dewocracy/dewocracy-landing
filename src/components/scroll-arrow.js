import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <span
      className={`scroll-top-container ${showScroll ? "flex" : "hidden"}`}
      onClick={scrollTop}
    >
      <div className="scroll-top">
        <FontAwesomeIcon icon={faAngleUp} color="white" />
      </div>
    </span>
  );
};

export default ScrollArrow;
