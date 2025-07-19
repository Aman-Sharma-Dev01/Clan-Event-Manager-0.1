import React from 'react';
import './SocietySection.css';
import { Link } from 'react-router-dom';

const societies = [
  { name: "Tech Society", img: "/images/tech.jpg" , path: "./tech"},
  { name: "Dance Club", img: "/images/dance.jpg" , path: "./tech1" },
  { name: "Music Circle", img: "/images/music.jpg" },
  { name: "Drama Group", img: "/images/drama.jpg" },
  { name: "Literary Hub", img: "/images/literature.jpg" },
  { name: "Photography", img: "/images/photo.jpg" },
  { name: "Coding Club", img: "/images/coding.jpg" },
  { name: "Design Team", img: "/images/design.jpg" },
  { name: "Sports Crew", img: "/images/sports.jpg" },
  { name: "Entrepreneurs", img: "/images/startup.jpg" },
];

const SocietySection = () => {
  return (
    <div className="society-section">
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
