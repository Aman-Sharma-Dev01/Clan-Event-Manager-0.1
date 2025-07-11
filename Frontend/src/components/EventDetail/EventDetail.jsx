import React from "react";
import { useLocation } from "react-router-dom";
import "./EventDetail.css";

const EventDetail = () => {
  const { state: event } = useLocation();

  if (!event) return <p>Event not found</p>;

  return (
    <div className="event-detail-page">
      <h2>{event.title}</h2>
      <div className="detail-box">
        <div className="badges">
          <span className={`badge clan-${event.clan.toLowerCase()}`}>{event.clan}</span>
          <span className={`badge status-${event.status.toLowerCase()}`}>{event.status}</span>
        </div>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Participants:</strong> {event.participants}</p>
        <p><strong>Prize:</strong> {event.prize}</p>
        <button className="register-btn">Register Now</button>
      </div>
    </div>
  );
};

export default EventDetail;
