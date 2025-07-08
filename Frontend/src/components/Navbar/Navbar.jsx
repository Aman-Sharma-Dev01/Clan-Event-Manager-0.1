import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo"><h1>Clan Event Manager</h1></div>
        <div className="rightThings">
            <div className="navname">Welcome, User</div>
            <div className="navname">Logout</div>
        </div>
    </div>
  )
}

export default Navbar