import React from "react";
import "./WildCatssPage.css";

const WildCatsPage = () => {
  return (
    <div className="wildcats-container">
      <div className="wildcats-hero">
        <h1>Wild Cats Clan</h1>
        <p>Manav Rachna University</p>
      </div>

      <div className="wildcats-content">
        <section className="wildcats-about">
          <h2>About Wild Cats</h2>
          <p>
            The Wild Cats Clan roars with power, grace, and creativity.
            Representing fierce leadership and unparalleled spirit, we excel in
            both academics and extracurriculars. Join us to unleash your wild potential.
          </p>
        </section>

        <section className="wildcats-events">
          <h2>Upcoming Events</h2>
          <ul>
            <li>
              <strong>🔥 Talent Hunt 2025</strong> – 28th July
            </li>
            <li>
              <strong>🎭 Street Play Showdown</strong> – 5th August
            </li>
            <li>
              <strong>🎨 Clan Poster Competition</strong> – 15th August
            </li>
          </ul>
        </section>

        <section className="wildcats-join">
          <h2>Join the Clan</h2>
          <p>
            Want to be a part of the Wild Cats legacy? Register now and prove your mettle.
          </p>
          <button className="join-button">Register Now</button>
        </section>
      </div>
    </div>
  );
};

export default WildCatsPage;
