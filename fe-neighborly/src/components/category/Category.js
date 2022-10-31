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

/*<div className="container-fluid max-2">
      <div className="row mt-5 max-2">
        <div className="col-md-2">
          <button className="btn  w-100 mb-3">Food</button>
          <button className="btn w-100">Services</button>
        </div>
      </div>
    </div>*/
