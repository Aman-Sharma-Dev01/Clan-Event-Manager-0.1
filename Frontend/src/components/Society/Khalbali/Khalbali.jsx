import React from 'react';
import './Khalbali.css';
import { FaTheaterMasks, FaCalendarAlt, FaEnvelope, FaUsers } from 'react-icons/fa';

const Khalbali = () => {
  return (
    <div className="khalbali-container">
      <header className="hero-section">
        <FaTheaterMasks className="hero-icon" />
        <h1>Khalbali - The Dramatic Society</h1>
        <p>Unleashing emotions, one act at a time</p>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Khalbali is the official dramatic society of our university. We bring stories to life through powerful performances,
          stage plays, street acts, and monologues. Our mission is to inspire, entertain, and create unforgettable moments
          for audiences across campus.
        </p>
      </section>

      <section className="events-section">
        <h2><FaCalendarAlt /> Upcoming Events</h2>
        <ul className="event-list">
          <li><strong>Stage Play:</strong> "Shadows of Silence" - 28th July, Main Auditorium</li>
          <li><strong>Street Play:</strong> "Vote for Change" - 5th August, University Lawn</li>
          <li><strong>Monologue Night:</strong> "Voices Within" - 12th August, Black Box Theater</li>
        </ul>
      </section>

      <section className="members-section">
        <h2><FaUsers /> Core Team</h2>
        <ul>
          <li><strong>President:</strong> Aditi Sharma</li>
          <li><strong>Vice President:</strong> Rohan Verma</li>
          <li><strong>Director:</strong> Meera Khan</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2><FaEnvelope /> Contact Us</h2>
        <p>Email: <a href="mailto:khalbali@university.edu">khalbali@university.edu</a></p>
        <p>Instagram: <a href="https://instagram.com/khalbali_squad" target="_blank" rel="noreferrer">@khalbali_squad</a></p>
      </section>

      <footer>
        <p>&copy; 2025 Khalbali Society | University Name</p>
      </footer>
    </div>
  );
};

export default Khalbali;
