import React from "react";
import { useLocation } from "react-router-dom";
import "./EventDetail.css";

const EventDetail = () => {
  const { state: event } = useLocation();

  if (!event) return <p>Event not found</p>;

  // Format date to DD-MM-YYYY
  const formattedDate = new Date(event.Date).toLocaleDateString("en-IN");

  return (
    <div className="event-detail-page">
      <h2>{event.EventTitle}</h2>

      <div className="detail-box">
        {/* Optional: show poster image */}
        {event.poster?.url && (
          <img src={event.poster.url} alt="Event Poster" className="event-poster" />
        )}

        <p><strong>Clan:</strong> {event.clanName}</p>
        <p><strong>Description:</strong> {event.Description}</p>
        <p><strong>Category:</strong> {event.Category}</p>
        <p><strong>Date:</strong> {formattedDate}</p>
        <p><strong>Time:</strong> {event.Time}</p>
        <p><strong>Location:</strong> {event.Location}</p>
        <p><strong>Reward:</strong> {event.Reward}</p>
        <p><strong>Requirements:</strong> {event.Requirements || "None"}</p>

        <button className="register-btn">Register Now</button>
      </div>
    </div>
  );
};

export default EventDetail;
