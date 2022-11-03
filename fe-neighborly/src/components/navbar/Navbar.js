import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import { BsFillCartDashFill, BsFillPersonFill } from "react-icons/bs";
import Logo from "./../../Img/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="logo" className="logo"></img>
          </NavLink>
        </div>
        <NavLink to="/offer" className="nav-text">
          Offers
        </NavLink>
        <NavLink to="/newoffer" className="nav-text">
          New offer
        </NavLink>
      </div>
      <div className="nav-right">
        <BsFillCartDashFill size={24} />
        <NavDropdown
          title={<BsFillPersonFill size={24} className="c-white" />}
          id="basic-nav-dropdown"
          className="w-64 c-white"
        >
          <NavDropdown.Item>
            <NavLink to="/users/${id}" className="nav-btn">
              My Profile
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink className="nav-btn">Logout</NavLink>
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    </nav>
  );
}
