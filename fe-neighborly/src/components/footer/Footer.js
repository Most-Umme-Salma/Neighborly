import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { BsTwitter, BsYoutube, BsLinkedin, BsFacebook } from "react-icons/bs";
import Logo from "./../../Img/logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="logo" className="Logo"></img>
          <h4>Subscribe to our newsletter</h4>
          <input
            className="footer-input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="footer-btn">Subscribe</button>
        </div>
        <div className="footer-row">
          <div className="footer-col">
            <h5>Product</h5>
            <Link className="footer-link" href="#">
              Features
            </Link>
            <Link className="footer-link" href="#">
              Pricing
            </Link>
          </div>
          <div className="footer-col">
            <h5>Resources</h5>
            <Link className="footer-link" href="#">
              Blog
            </Link>
            <Link className="footer-link" href="#">
              User guides
            </Link>
            <Link className="footer-link" href="#">
              Webinars
            </Link>
          </div>
          <div className="footer-col">
            <h5>Plans & Pricing</h5>
            <Link className="footer-link" href="#">
              Personal
            </Link>
            <Link className="footer-link" href="#">
              Start up
            </Link>
            <Link className="footer-link" href="#">
              Organization
            </Link>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link className="footer-link" href="#">
              About us
            </Link>
            <Link className="footer-link" href="#">
              Contact us
            </Link>
          </div>
        </div>
        <div className="footer-row footer-end">
          <p>
            &copy;{new Date().getFullYear()} Brand, Inc. • Privacy • Terms •
            Sitemap
          </p>
          <div className="footer-icons">
            <BsTwitter size={20} />
            <BsYoutube size={20} />
            <BsLinkedin size={20} />
            <BsFacebook size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
