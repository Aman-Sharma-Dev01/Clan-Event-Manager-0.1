import React from "react";
import "./ForestRhinosPage.css";

const ForestRhinosPage = () => {
  return (
    <div className="forest-container">
      <div className="forest-hero">
        <h1>Forest Rhinos Clan</h1>
        
      </div>

      <div className="forest-content">
        <section className="forest-about">
          
        </section>

        <section className="forest-events">
          <h2>Upcoming Events</h2>
          <ul>
            <li>
              <strong>🌿 Jungle Run</strong> – 30th July
            </li>
            <li>
              <strong>🦏 Tribal Art Showdown</strong> – 10th August
            </li>
            <li>
              <strong>🌳 Green Innovation Hackathon</strong> – 20th August
            </li>
          </ul>
        </section>

        <section className="forest-join">
          <h2>Join the Clan</h2>
          <p>
            Embrace your inner strength — join the Forest Rhinos and become part of a legacy rooted in resilience and power.
          </p>
          <button className="join-button">Register Now</button>
        </section>
      </div>
    </div>
  );
};

export default ForestRhinosPage;
