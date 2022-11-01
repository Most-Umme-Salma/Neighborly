import React, { useState } from "react";
import "./category.css";
import { BsCaretDownFill } from "react-icons/bs";

export default function Category({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-dtn " onClick={(e) => setIsActive(!isActive)}>
        <div>{selected ? selected : "categories"}</div>
        <div>
          <BsCaretDownFill size={15} />
        </div>
      </div>

      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-items">
            <div
              onClick={(e) => {
                setSelected(e.target.textContent);
                setIsActive(false);
              }}
            >
              all
            </div>
          </div>

          <div className="dropdown-items">
            <div
              onClick={(e) => {
                setSelected(e.target.textContent);
                setIsActive(false);
              }}
            >
              hobby
            </div>
          </div>
          <div className="dropdown-items">
            <div
              onClick={(e) => {
                setSelected(e.target.textContent);
                setIsActive(false);
              }}
            >
              household
            </div>
          </div>
          <div className="dropdown-items">
            <div
              onClick={(e) => {
                setSelected(e.target.textContent);
                setIsActive(false);
              }}
            >
              offer
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
