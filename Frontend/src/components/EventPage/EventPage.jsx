import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import { useAuth } from "../../Context/AuthProvider";

const ClanCardsSection = () => {
  const { events } = useAuth(); // ✅ get events from context
  const navigate = useNavigate();

  const handleCardClick = (event) => {
    navigate(`/event/${event._id}`, { state: event });
  };

  return (
    <div className="events-container">
      <h1>Events</h1>
      <p>Discover and participate in exciting clan events</p>

      {events && events.length > 0 ? (
        <div className="event-grid">
          {events.map((event) => (
            <div
              key={event._id}
              className="event-card"
              onClick={() => handleCardClick(event)}
            >
              <div className="badge-container">
                <span className="badge clan-default">
                  {event.clanName || "Clan"}
                </span>
                <span className={`badge ${event.status}`}>{event.status}</span>
              </div>
               <img
                src={event.poster?.url}
                alt="Event Poster"
                className="event-poster"
              />
              <h3>{event.EventTitle}</h3>
              <p className="description">{event.Description}</p>
              <div className="info">
                <p>📅 {new Date(event.Date).toLocaleDateString()}</p>
                <p>⏰ {event.Time}</p>
                <p>📍 {event.Location}</p>
                <p>🎁 {event.Reward}</p>
              </div>
              <p className="prize">
                <strong>Requirements:</strong> {event.Requirements || "None"}
              </p>
             
            </div>
          ))}
        </div>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default ClanCardsSection;
