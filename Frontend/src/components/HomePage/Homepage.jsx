import React from 'react'
import './Homepage.css'; // Assuming you have a CSS file for styling
import HeroSection from '../HeroSection/HeroSection';
import EventSection from '../EventSection/EventSection';
const Homepage = () => {
  return (
    <div>
        <HeroSection/>
        <EventSection/>
    </div>
  )
}

export default Homepage