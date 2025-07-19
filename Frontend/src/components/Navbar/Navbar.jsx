import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import mruLogo from "../../assets/logo2.png";
import { BACKEND_URL } from "../utils.js";

const Navbar = () => {
  const { profile } = useAuth();
  const location = useLocation();
  const path = location.pathname;

  const adminIds = [
    "6870f6f9436c91c3428aa9b2",
    "6870fbc9883f05472f4eacaf",
    "6870fb4a0cd078b2ab0b02e0",
    "6870fc10f93932714cff478a",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const isAdmin = profile && adminIds.includes(profile._id);
  const isDashboard = path === "/dashboard" || path === "/about" || path === "/event";
  const isHome = path === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = async () => {
    try {
      await axios.get(`${BACKEND_URL}/api/users/logout`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.removeItem("jwt");
      window.location.href = "/login";
      toast.success("User logout successfully", {
        duration: 3000,
      });
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error(
        error.response?.data?.message || "Logout failed, please try again",
        { duration: 3000 }
      );
    }
  };

  return (
    <>
      <nav
        className={`navbar ${isDashboard ? "dashboard-navbar" : ""} ${
          isHome ? "home-navbar" : ""
        }`}
      >
        <div className="navbar-left">
          {/* Hamburger Icon */}
          <button className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>

          <img src={mruLogo} alt="MRU Logo" className="logo-img" />
         
        </div>

        <div className="navbar-center desktop-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/event" className="nav-link">Events</Link>
          {isAdmin && <Link to="/dashboard" className="nav-link">Dashboard</Link>}
          <Link to="/about" className="nav-link">About</Link>
        </div>

        <div className="navbar-right desktop-menu">
          <span className="nav-link">Welcome, {profile?.Firstname || "Guest"}</span>
          {(
                    isAdmin ? (
                   <button onClick={logout} className="login-btn">Logout</button>
                 ) : (
              <Link to="/login" className="login-btn">Login</Link>
             )
           )}

        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="hamburger close-btn" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        <Link to="/event" className="nav-link" onClick={toggleMenu}>Events</Link>
        {isAdmin && <Link to="/dashboard" className="nav-link" onClick={toggleMenu}>Dashboard</Link>}
        <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>

        <span className="nav-link">Welcome, {profile?.Firstname || "Guest"}</span>
        {!isDashboard && (
          <button onClick={logout} className="login-btn">Logout</button>
        )}
      </div>
    </>
  );
};

export default Navbar;
