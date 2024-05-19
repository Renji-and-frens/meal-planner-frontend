import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import "./Dropdown.css";

const Dropdown = ({
  filterTitle,
  itemsArr,
  selectedFilter,
  addSelectedFilter,
  removeSelectedFilter,
}) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  //handle checkbox change
  const handleCheckboxChange = (item) => {
    selectedFilter.includes(item)
      ? removeSelectedFilter(item)
      : addSelectedFilter(item);
  };

  useEffect(() => {
    // event listener function to handle clicks outside of dropdown
    // dropdownRef.current checks if ref is set or not i.e., null or DOM dropdown
    // !dropdownRef.current.contains(event.target) checks if document clicked is dropdown or omthing else.
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    //attach above event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div
        className="dropdown-btn"
        onClick={() => {
          setIsActive((prevIsActive) => !prevIsActive);
        }}
      >
        <p>{filterTitle}</p>
        {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div
        className={`dropdown-content ${
          isActive ? "dropdown-content-active" : ""
        }`}
      >
        {itemsArr.map((item) => {
          return (
            <div
              className="dropdown-item"
              onClick={() => handleCheckboxChange(item)}
            >
              <input
                type="checkbox"
                checked={selectedFilter.includes(item)}
                onChange={() => {}}
              />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
