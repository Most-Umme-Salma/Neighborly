import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { BsTwitter, BsYoutube, BsLinkedin, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <h2>logo</h2>
          <h2>Subscribe to our newsletter</h2>
          <input
            className="footer-input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="footer-btn">Subscribe</button>
        </div>
        <div className="footer-row">
          <div className="nav-col">
            <h2>Product</h2>
            <ul>
              <li>
                <Link className="footer-link" href="#">
                  Features
                </Link>
              </li>
              <li>
                <Link className="footer-link" href="#">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-col">
            <h2>Resources</h2>
            <ul>
              <li>
                <Link className="footer-link" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="footer-link" href="#">
                  User guides
                </Link>
              </li>
              <li>
                <Link className="footer-link" href="#">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-col">
            <h2>Company</h2>
            <ul>
              <li>
                <Link className="footer-link" href="#">
                  About us
                </Link>
              </li>
              <li>
                <Link className="footer-link" href="#">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-col">
            <h2>Plans & Pricing</h2>
            <ul>
              <li>
                <Link className="footer-link" href="#">
                  Personal
                </Link>
              </li>
              <li>
                <Link className="footer-link" href="#">
                  Start up
                </Link>
              </li>
              <li>
                <Link className="footer-link" href="#">
                  Organization
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-row">
          <button className="language-btn">Language</button>
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
