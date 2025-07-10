import React from "react";
import "./Navbar.css";
import { FaShieldAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaShieldAlt className="logo-icon" />
        <span className="brand-name">ClanEvents</span>
      </div>

      <div className="navbar-center">
        <a href="#home" className="nav-link">Home</a>
        <a href="#events" className="nav-link">Events</a>
        <a href="#dashboard" className="nav-link">Dashboard</a>
      
      </div>



      <div className="navbar-right">
         <a href="#events" className="nav-link">Welcome,User</a>
        <button className="login-btn">Logout</button>
      
      </div>
    </nav>
  );
};

export default Navbar;
