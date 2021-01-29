/**
 * Footer Component
 */

import React from "react";
import { Link } from "gatsby";
import "../styles/footer.css";
import logo from "../../public/static/BoomerVietnam.png";
import payments from "../../public/static/payments.png";

const Footer = ({ fullpageApi }) => {
  const handleScroll = () => {
    fullpageApi.moveTo(1);
  };

  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-left">
          </div>
          <div className="footer-top-middle">
            <Link to="/" className="footer-top-logo">
              <img
                src={logo}
                alt="Boomer Naturals Logo"
                className="header-logo"
              />
            </Link>
            <div className="footer-top-links">
            <span className="footer-text-reg">
              <b>Phone:</b> (702) 960-4843
            </span>
            <br></br>
            <span className="footer-text-reg">
              <b>E-Mail:</b> info@BoomerVietnam.com
            </span>
            </div>
          </div>
          <div className="footer-top-right">
            
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <Link to="/" className="header-link">
              Contact Us
            </Link>
            <Link to="/" className="header-link">
              F.A.Q
            </Link>
            <Link to="/" className="header-link">
              About
            </Link>
            <Link to="/" className="header-link">
              Terms of Service
            </Link>
            <Link to="/" className="header-link">
              Privacy Policy
            </Link>
          </div>
          <div className="footer-bottom-right">
            <div
              role="button"
              tabIndex={0}
              className="top-scroll-btn"
              onClick={handleScroll}
            >
              Back to Top
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
