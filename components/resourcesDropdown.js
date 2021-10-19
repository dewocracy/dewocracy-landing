import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useCallback, useState, useRef } from "react";
import { useClickAway } from 'react-use';

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
      " inline-flex justify-center w-full rounded-md border border-grey shadow-sm px-4 py-2 bg-white text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
  },
  navbar: {
    buttonClasses:
      " text-lg hover:text-primary-400  inline-flex justify-center w-full rounded-md px-4 py-2  text-primary ",
  },
};
export function ResourceDropdown({ title, children, theme = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const dropdownRef = useRef(null);
  useClickAway(dropdownRef, () => {
    setIsOpen(false)
  })

  return (
    <div ref={dropdownRef} className="relative mt-2 inline-block text-left">
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
        <div className="w-80 text-lg origin-top-right absolute top-12 left-0 mt-4 pr-4 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="pl-4 py-1"
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

ResourceDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  theme: PropTypes.string,
};
