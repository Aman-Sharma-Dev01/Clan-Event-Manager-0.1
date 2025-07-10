import React from "react";
import "./EventSection.css";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";

const events = [
  {
    id: "evt-phoenix-code",
    clan: "Phoenix",
    title: "Phoenix Coding Challenge",
    date: "15/01/2024",
    joined: 23,
  },
  {
    id: "evt-dragon-sports",
    clan: "Dragon",
    title: "Dragon Sports Tournament",
    date: "18/01/2024",
    joined: 31,
  },
  {
    id: "evt-wolf-art",
    clan: "Wolf",
    title: "Wolf Art Exhibition",
    date: "20/01/2024",
    joined: 18,
  },
];

const EventSection = () => {
  return (
    <section className="events-section">
      <div className="events-header">
        <h2>Upcoming Events</h2>
        <button className="view-all-btn">View All Events</button>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image-placeholder">
              <span className="clan-badge">{event.clan}</span>
              <div className="image-icon">🖼️</div>
            </div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <div className="event-meta">
                <div className="meta-item">
                  <FaCalendarAlt />
                  <span>{event.date}</span>
                </div>
                <div className="meta-item">
                  <FaUsers />
                  <span>{event.joined} joined</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSection;