import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const toAbout = () => {
    navigate("/about");
  };
  return (
    <footer className="footer-cta">
      <h2>Ready to Join the Adventure?</h2>
      <p>Connect with your clan, participate in events, and build lasting memories.</p>
      <a href="#all-winners"><button className="cta-btn">Get Started Today</button></a>
    </footer>
  );
};

export default Footer;
