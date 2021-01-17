import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useCallback, useState } from "react";

/**
 * Dropdown panel, show/hide based on dropdown state.
 Entering: "transition ease-out duration-100"
 From: "transform opacity-0 scale-95"
 To: "transform opacity-100 scale-100"
 Leaving: "transition ease-in duration-75"
 From: "transform opacity-100 scale-100"
 To: "transform opacity-0 scale-95"
 */

const themes = {
  default: {
    buttonClasses:
      "inline-flex justify-center w-full rounded-md border border-grey shadow-sm px-4 py-2 bg-white text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
  },
  navbar: {
    buttonClasses:
      "inline-flex justify-center w-full rounded-md px-4 py-2 text-sm text-primary hover:underline",
  },
};
export function Dropdown({ title, children, theme = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleHandler}
          className={themes[theme].buttonClasses}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {title}
          <span className="pl-2">
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            onClick={toggleHandler}
          >
            {children}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  theme: PropTypes.string,
};
