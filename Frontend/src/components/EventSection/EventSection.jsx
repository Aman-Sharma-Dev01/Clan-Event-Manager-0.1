import React from "react";
import "./EventSection.css";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import { useAuth } from "../../Context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

const EventSection = () => {
  const { events } = useAuth();
  const navigate = useNavigate();
  
  // Get first 3 events only
  const upcomingEvents = events?.slice(0, 3) || [];
  console.log(upcomingEvents);

  const viewallEvents = () => {
    navigate("/event");
  }
  return (
    <section className="events-section">
      <div className="events-header">
        <h2>Upcoming Events</h2>
        <button onClick={viewallEvents} className="view-all-btn">View All Events</button>
      </div>

      <div className="events-grid">
        {upcomingEvents.length === 0 ? (
          <p>No upcoming events available.</p>
        ) : (
          upcomingEvents.map((event) => (
            <div key={event._id} className="event-card">
              <div className="event-image-placeholder">
                <span className="clan-badge">{event.clanName || "Clan"}</span>
                <img
                  src={event.poster?.url}
                  alt={event.EventTitle}
                  className="event-image"
                />
              </div>
              <div className="event-details">
                <h3>{event.EventTitle}</h3>
                <div className="event-meta">
                  <div className="meta-item">
                    <FaCalendarAlt />
                    <span>{new Date(event.Date).toLocaleDateString()}</span>
                  </div>
                  <div className="meta-item">
                    <FaUsers />
                    <span>0 joined</span> {/* Placeholder */}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default EventSection;
