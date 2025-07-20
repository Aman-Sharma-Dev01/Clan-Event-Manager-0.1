import React from 'react'
import './Homepage.css'; // Assuming you have a CSS file for styling
import HeroSection from '../HeroSection/HeroSection';
import ClanLogoSection from '../ClanLogoSection/ClanLogoSection';
import EventSection from '../EventSection/EventSection';
import SocietySection from '../SocietySection/SocietySection';

const Homepage = () => {
  return (
    <div>
        <HeroSection/>
        <ClanLogoSection/>
        <EventSection/>
        <SocietySection/>
    </div>
  )
}

export default Homepage