import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";

const eventData = [
  {
    id: 1,
    clan: "PHOENIX",
    status: "UPCOMING",
    title: "Phoenix Coding Challenge",
    description: "Test your programming skills in this intense coding",
    date: "15/01/2024",
    time: "14:00",
    location: "Computer Lab A",
    participants: "23/50",
    prize: "Trophy + Certificate"
  },
  {
    id: 2,
    clan: "DRAGON",
    status: "UPCOMING",
    title: "Dragon Sports Tournament",
    description: "Multi-sport tournament including basketball",
    date: "18/01/2024",
    time: "10:00",
    location: "Sports Complex",
    participants: "31/40",
    prize: "Medal + Sports Gear"
  },
    {
    id: 3,
    clan: "WOLF",
    status: "UPCOMING",
    title: "Wolf Art Exhibition",
    description: "Showcase your creativity in painting, sculpture, and",
    date: "20/01/2024",
    time: "16:00",
    location: "Art Gallery",
    participants: "18/30",
    prize: "Art Supplies"
  },
  {
    id: 4,
    clan: "EAGLE",
    status: "UPCOMING",
    title: "Eagle Debate League",
    description: "Sharpen your public speaking skills in a formal",
    date: "22/01/2024",
    time: "11:30",
    location: "Auditorium B",
    participants: "20/25",
    prize: "Books + Certificate"
  },
  {
    id: 5,
    clan: "PHOENIX",
    status: "COMPLETED",
    title: "Phoenix Hackathon",
    description: "An intense 24-hour hackathon for real-world",
    date: "05/01/2024",
    time: "09:00",
    location: "Innovation Hub",
    participants: "50/50",
    prize: "Cash + Internship"
  },
  {
    id: 6,
    clan: "DRAGON",
    status: "UPCOMING",
    title: "Dragon Music Night",
    description: "An open mic event for singers, musicians, and",
    date: "25/01/2024",
    time: "18:00",
    location: "Main Lawn",
    participants: "15/30",
    prize: "Trophy + Spotlight Feature"
  },
  {
    id: 7,
    clan: "WOLF",
    status: "UPCOMING",
    title: "Wolf Gaming League",
    description: "Face off in e-sports tournaments for popular",
    date: "28/01/2024",
    time: "17:00",
    location: "GameZone Arena",
    participants: "40/50",
    prize: "Gaming Gear"
  },
  {
    id: 8,
    clan: "EAGLE",
    status: "UPCOMING",
    title: "Eagle Science Fair",
    description: "Present innovative science projects and experiments.",
    date: "30/01/2024",
    time: "12:00",
    location: "Hall B",
    participants: "22/30",
    prize: "Trophy + Certificate"
  }
];

const ClanCardsSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (event) => {
    navigate(`/event/${event.id}`, { state: event });
  };

  return (
    <div className="events-container">
      <h1>Events</h1>
      <p>Discover and participate in exciting clan events</p>
      <div className="event-grid">
        {eventData.map((event) => (
          <div key={event.id} className="event-card" onClick={() => handleCardClick(event)}>
            <div className="badge-container">
              <span className={`badge clan-${event.clan.toLowerCase()}`}>{event.clan}</span>
              <span className={`badge status-${event.status.toLowerCase()}`}>{event.status}</span>
            </div>
            <h3>{event.title}</h3>
            <p className="description">{event.description}</p>
            <div className="info">
              <p>📅 {event.date}</p>
              <p>⏰ {event.time}</p>
              <p>📍 {event.location}</p>
              <p>👥 {event.participants}</p>
            </div>
            <p className="prize"><strong>Prize:</strong> {event.prize}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClanCardsSection;
