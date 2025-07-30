import React from "react";
import "./WaterSharksPage.css";

const WaterSharksPage = () => {
  return (
    <div className="watersharks-container">
      <div className="watersharks-hero">
        <h1> WaterSharks Clan</h1>
        
      </div>

      <div className="watersharks-content">
        <section className="watersharks-about">
        
        
        </section>

        <section className="watersharks-events">
          <h2>Upcoming Events</h2>
          <ul>
            <li>
              <strong>🌊 Aqua Fest</strong> – 25th July
            </li>
            <li>
              <strong>🧠 Shark Quiz Challenge</strong> – 8th August
            </li>
            <li>
              <strong>⚓ Underwater Innovation Pitch</strong> – 18th August
            </li>
          </ul>
        </section>

        <section className="watersharks-join">
          <h2>Join the Clan</h2>
          <p>
            Ready to make waves with the WaterSharks? Register now and show your clan spirit!
          </p>
          <button className="join-button">Register Now</button>
        </section>
      </div>
    </div>
  );
};

export default WaterSharksPage;
