import React from "react";
import "./AirFalconsPage.css";

const AirFalconsPage = () => {
  return (
    <div className="airfalcons-container">
      <div className="airfalcons-hero">
        <h1>🦅 Air Falcons Clan</h1>
        <p>Manav Rachna University</p>
      </div>

      <div className="airfalcons-content">
        <section className="airfalcons-about">
          <h2>About Air Falcons</h2>
          <p>
            The Air Falcons Clan soars high with precision, agility, and unstoppable ambition.
            With a sharp eye on success and a heart full of courage, Falcons are always ahead of the curve.
            Join us and fly beyond limits.
          </p>
        </section>

        <section className="airfalcons-events">
          <h2>Upcoming Events</h2>
          <ul>
            <li>
              <strong>🌬️ Wind Sprint Challenge</strong> – 27th July
            </li>
            <li>
              <strong>🎤 Sky High Debate</strong> – 7th August
            </li>
            <li>
              <strong>🎯 Aim & Fly Tech Fair</strong> – 17th August
            </li>
          </ul>
        </section>

        <section className="airfalcons-join">
          <h2>Join the Clan</h2>
          <p>
            Ready to ride the winds of excellence? Join the Air Falcons Clan and rise above the rest.
          </p>
          <button className="join-button">Register Now</button>
        </section>
      </div>
    </div>
  );
};

export default AirFalconsPage;
