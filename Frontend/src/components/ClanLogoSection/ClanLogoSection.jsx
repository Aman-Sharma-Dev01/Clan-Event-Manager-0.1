import React from "react";
import "./ClanLogoSection.css";
import { FaUsers } from "react-icons/fa";

const clans = [
  {
    name: "Wild Cats",
    description: "Rise from the ashes",
    color: "#EF4444",
    members: 45,
  },
  {
    name: "Forest Rhinos",
    description: "Strength and wisdom",
    color: "#10B981",
    members: 52,
  },
  {
    name: "Air Falcons",
    description: "Unity and loyalty",
    color: "#3B82F6",
    members: 38,
  },
  {
    name: "Water Sharks",
    description: "Vision and freedom",
    color: "#FACC15",
    members: 41,
  },
];

const ClanLogoSection = () => {
  return (
    <section className="clans-section">
      <h2>Choose Your Clan</h2>
      <div className="clan-grid">
        {clans.map((clan) => (
          <div key={clan.name} className="clan-card">
            <div
              className="clan-icon"
              style={{ backgroundColor: clan.color }}
            >
              🏆
            </div>
            <h3>{clan.name}</h3>
            <p className="clan-desc">{clan.description}</p>
            <div className="clan-members">
              <FaUsers className="members-icon" />
              <span>{clan.members} members</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClanLogoSection;
