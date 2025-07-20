import React from 'react';
import './SocietySection.css';
import { Link } from 'react-router-dom';
import khalbaliLogo from "../../../public/SocietyLogo/khalbali.jpg"
import mokshLOGO from "../../../public/SocietyLogo/Moksh.jpg"
import feliciaLogo from "../../../public/SocietyLogo/Felicia.png"
import nooraLogo from "../../../public/SocietyLogo/noora.JPG"
import rehnumaLogo from "../../../public/SocietyLogo/rehnuma.jpg"
import techsoulLogo from "../../../public/SocietyLogo/techsoul.jpg"
import gamenixLogo from "../../../public/SocietyLogo/gameinx.jpg"
import atheliteLogo from "../../../public/SocietyLogo/athelites.jpg"
import rudraLogo from "../../../public/SocietyLogo/rudra.png"
import drishtiLogo from "../../../public/SocietyLogo/drishti.jpg"

const societies = [
  { name: "Khalbali", img:khalbaliLogo , path: "/khalbali-page"},
  { name: "Moksh", img: mokshLOGO , path: "/moksh-page" },
  { name: "Felicia", img: feliciaLogo  , path: "/felicia-page"},
  { name: "Noora", img: nooraLogo ,   path: "/noora-page" },
  { name: "Rehnuma", img: rehnumaLogo , path: "/rehnuma-page" },
  { name: "Techsoul", img: techsoulLogo,path: "/techsoul-page"  },
  { name: "Gamenix", img: gamenixLogo , path: "/gamenix-page" },
  { name: "Athelites", img: atheliteLogo , path: "/athelites-page"  },
  { name: "Rudra", img: rudraLogo ,  path: "/rudra-page" },
  { name: "Drishti", img: drishtiLogo , path: "/drishti-page"  },
];

const SocietySection = () => {
  
  return (
    <div id='society-section' className="society-section">
      <h2 className="section-title">Our Societies</h2>
      <div className="society-card-container">
        {societies.map((society, index) => (
          <div key={index} className="society-card">
            <Link to={society.path}>
            <img src={society.img} alt={society.name} />
            <h3>{society.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocietySection;
