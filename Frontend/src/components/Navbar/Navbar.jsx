import React from "react";
import "./Navbar.css";
import { FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaShieldAlt className="logo-icon" />
        <span className="brand-name">ClanEvents</span>
      </div>

      <div className="navbar-center">
        <Link to= "/" className="nav-link">Home</Link>
        <Link to= "/events" className="nav-link">Events</Link>
        <Link to= "/dashboard"className="nav-link">Dashboard</Link>
      </div>



      <div className="navbar-right">
         <a href="#events" className="nav-link">Welcome,User</a>
        <button className="login-btn">Logout</button>
      
      </div>
    </nav>
  );
};

export default Navbar;
