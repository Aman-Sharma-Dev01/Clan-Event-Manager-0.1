import React from "react";
import "./Navbar.css";
import { FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider.jsx";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const { profile } = useAuth(); // Uncomment if you want to use profile data
  const logout = async (data) => {
    try {
      axios.get("http://localhost:4001/api/users/logout", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.removeItem("jwt"); // Remove token from localStorage 
      window.location.href = "/login"; // Redirect to login page
      toast.success(data.message || "User logout successfully", {
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
    <nav className="navbar">
      <div className="navbar-left">
        <FaShieldAlt className="logo-icon" />
        <span className="brand-name">ClanEvents</span>
      </div>

      <div className="navbar-center">
        <Link to= "/" className="nav-link">Home</Link>
        <Link to= "/event" className="nav-link">Events</Link>
        <Link to= "/dashboard"className="nav-link">Dashboard</Link>
      </div>



      <div className="navbar-right">
         <a href="#events" className="nav-link">Welcome,{profile?.Firstname ? `${profile.Firstname}` : "Welcome"}</a>
        <button onClick={logout} className="login-btn">Logout</button>
      
      </div>
    </nav>
  );
};

export default Navbar;
