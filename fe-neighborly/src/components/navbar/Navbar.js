import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import { BsFillCartDashFill, BsFillPersonFill } from "react-icons/bs";
import Logo from "./../../Img/logo.png";
import Searchbar from "../searchbar/Searchbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navbar() {
  return (
    <nav>
      <div className="nav">
        <div className="nav-left">
          <div>
            <NavLink to="/" className="nav-text">
              <img src={Logo} alt="logo" className="Logo"></img>
            </NavLink>
          </div>
          <NavLink to="/offer" className="nav-text">
            offers
          </NavLink>
          <NavLink to="/newoffer" className="nav-text">
            New offer
          </NavLink>
        </div>
        <div className="nav-right">
          <NavLink to="/searchbar" className="nav-text">
            Searchbar
          </NavLink>
          <BsFillCartDashFill size={25} />
          <NavDropdown
            title={<BsFillPersonFill size={25} />}
            id="basic-nav-dropdown"
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
      </div>
    </nav>
  );
}
