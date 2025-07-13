import React from "react";
import "./Navbar.css";

import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import mruLogo from "../../assets/logo2.png"; // adjust path if necessary


const Navbar = () => {
  const { profile } = useAuth();
  const location = useLocation();
  const path = location.pathname;

  const isDashboard = path === "/dashboard";
  const isHome = path === "/";

  const logout = async () => {
    try {
      await axios.get("http://localhost:4001/api/users/logout", {
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
    <nav
      className={`navbar 
        ${isDashboard ? "dashboard-navbar" : ""} 
        ${isHome ? "home-navbar" : ""}`}
    >
      <div className="navbar-left">
        <img src={mruLogo} alt="MRU Logo" className="logo-img" />
        <span className="brand-name"></span>
      </div>

      <div className="navbar-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/event" className="nav-link">Events</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>

      <div className="navbar-right">
        <span className="nav-link">
          Welcome, {profile?.Firstname || "Guest"}
        </span>
        {!isDashboard && (
          <button onClick={logout} className="login-btn">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
