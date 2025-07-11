import React from "react";
import "./Navbar.css";
import { FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider.jsx";

const Navbar = () => {
  const { profile } = useAuth(); // Uncomment if you want to use profile data
  
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
         <a href="#events" className="nav-link">Welcome,{profile?.Firstname ? `${profile.Firstname}` : "Welcome"}</a>
        <button className="login-btn">Logout</button>
      
      </div>
    </nav>
  );
};

export default Navbar;
