import React, { useState } from "react";
import "./category.css";
import { BsCaretDownFill } from "react-icons/bs";

export default function Category({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn " onClick={(e) => setIsActive(!isActive)}>
        <div>
          {selected === '' ? 'All' : selected}
        </div>
        <div>
          <BsCaretDownFill size={15} />
        </div>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-items" onClick={(e) => {
                setSelected('');
                console.log(selected)
                setIsActive(false);}}>
              all
          </div>

          <div className="dropdown-items" onClick={(e) => {
                setSelected(e.target.textContent);
                setIsActive(false);
              }}>
              hobby
          </div>
          <div className="dropdown-items"
              onClick={(e) => {
                setSelected(e.target.textContent);
                setIsActive(false);
              }}
            >
              home
          </div>
          <div className="dropdown-items" onClick={(e) => {
                setSelected(e.target.textContent);
                setIsActive(false);
              }}>
              service
          </div>
        </div>
      )}
    </div>
  );
}
