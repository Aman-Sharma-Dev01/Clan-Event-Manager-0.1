import React from 'react'
import './HeroSection.css'; // Assuming you have a CSS file for styling
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const nevigate = useNavigate();
  const toRegister = () => {
   nevigate('/register');
  };
  const toEvent = () => {
    nevigate('/event');
  };
  return (
    <div className='Hero-section'>
        <div className="mid-part">

        <h1>Clan Event Manager</h1>
        <p>Join your clan, participate in exciting events, and compete for glory.</p>
        <p> Unite with your fellow clan members and make your mark!</p>

        <div className="home-btns">
        <a href="#society-section"><button >Join Now</button></a>
       <a href='#event-sec'> <button id='btn2' >View Event</button></a>
        </div>
        </div>
    </div>
  )
}

export default HeroSection