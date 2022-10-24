import { Children } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import { BsFillCartDashFill, BsBellFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav>
      <div className="nav">
        <div className="nav-left">
          <NavLink to="/" className="nav-text">
            Home
          </NavLink>
          <NavLink to="/offer" className="nav-text">
            offers
          </NavLink>
          <NavLink to="/newoffer" className="nav-text">
            New offer
          </NavLink>
          <NavLink to="/promotions" className="nav-text">
            Promotions
          </NavLink>
        </div>
        <div className="nav-right">
          <NavLink to="/searchbar" className="nav-text">
            Searchbar
          </NavLink>
          <BsFillCartDashFill size={25} />
          <BsBellFill size={25} />

          <img />
        </div>
      </div>
    </nav>
  );
}
