import React from 'react'
import './Homepage.css'; // Assuming you have a CSS file for styling
import HeroSection from '../HeroSection/HeroSection';
import ClanLogoSection from '../ClanLogoSection/ClanLogoSection';
import EventSection from '../EventSection/EventSection';
import SocietySection from '../SocietySection/SocietySection';
import WinnersPhoto from '../WinnersPhoto/WinnersPhoto';
import AllWinnersSlideshow from '../AllWinnersSlideshow/AllWinnersSlideshow';

const Homepage = () => {
  return (
    <div>
        <HeroSection/>
        <ClanLogoSection/>
        {/* <WinnersPhoto/> */}
        <AllWinnersSlideshow/>
        <EventSection/>
        <SocietySection/>
    </div>
  )
}

export default Homepage