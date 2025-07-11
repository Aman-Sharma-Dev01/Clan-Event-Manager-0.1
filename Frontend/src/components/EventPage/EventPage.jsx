import React from 'react';
import './EventPage.css';

const events = [
  {
    id: 'event1',
    clan: 'Phoenix',
    status: 'upcoming',
    title: 'Phoenix Coding Challenge',
    desc: 'Test your programming skills in this intense coding competition.',
    date: '15/01/2024',
    time: '14:00',
    location: 'Computer Lab A',
    participants: '23/50',
    prize: 'Trophy + Certificate',
  },
  {
    id: 'event2',
    clan: 'Dragon',
    status: 'upcoming',
    title: 'Dragon Sports Tournament',
    desc: 'Multi-sport tournament including basketball, volleyball, and more.',
    date: '18/01/2024',
    time: '10:00',
    location: 'Sports Complex',
    participants: '31/40',
    prize: 'Medal + Sports Gear',
  },
  {
    id: 'event3',
    clan: 'Wolf',
    status: 'upcoming',
    title: 'Wolf Art Exhibition',
    desc: 'Showcase your creativity in painting, sculpture, and digital art.',
    date: '20/01/2024',
    time: '16:00',
    location: 'Art Gallery',
    participants: '18/30',
    prize: 'Art Supplies',
  },
  {
    id: 'event4',
    clan: 'Eagle',
    status: 'upcoming',
    title: 'Eagle Debate League',
    desc: 'Sharpen your public speaking skills in a formal debate setting.',
    date: '22/01/2024',
    time: '11:30',
    location: 'Auditorium B',
    participants: '20/25',
    prize: 'Books + Certificate',
  },
  {
    id: 'event5',
    clan: 'Phoenix',
    status: 'completed',
    title: 'Phoenix Hackathon',
    desc: 'An intense 24-hour hackathon for real-world project building.',
    date: '05/01/2024',
    time: '09:00',
    location: 'Innovation Hub',
    participants: '50/50',
    prize: 'Cash + Internship',
  },
  {
    id: 'event6',
    clan: 'Dragon',
    status: 'upcoming',
    title: 'Dragon Music Night',
    desc: 'An open mic event for singers, musicians, and beatboxers.',
    date: '25/01/2024',
    time: '18:00',
    location: 'Main Lawn',
    participants: '15/30',
    prize: 'Trophy + Spotlight Feature',
  },
  {
    id: 'event7',
    clan: 'Wolf',
    status: 'upcoming',
    title: 'Wolf Gaming League',
    desc: 'Face off in e-sports tournaments for popular titles.',
    date: '28/01/2024',
    time: '17:00',
    location: 'GameZone Arena',
    participants: '40/50',
    prize: 'Gaming Gear',
  },
  {
    id: 'event8',
    clan: 'Eagle',
    status: 'upcoming',
    title: 'Eagle Science Fair',
    desc: 'Present innovative science projects and experiments.',
    date: '30/01/2024',
    time: '12:00',
    location: 'Hall B',
    participants: '22/30',
    prize: 'Trophy + Certificate',
  }
];

const EventPage = () => {
  return (
    <div className="events-container">
      <h1>   E </h1>
      <h1>Events</h1>
      <p>Discover and participate in exciting clan events</p>
      <div className="cards-wrapper">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-tags">
              <span className={`clan-tag ${event.clan.toLowerCase()}`}>{event.clan}</span>
              <span className={`status-tag ${event.status}`}>{event.status}</span>
            </div>
            <div className="event-image-placeholder"></div>
            <div className="event-info">
              <h2>{event.title}</h2>
              <p className="desc">{event.desc}</p>
              <div className="event-details">
                <div><span>📅</span> {event.date}</div>
                <div><span>🕒</span> {event.time}</div>
                <div><span>📍</span> {event.location}</div>
                <div><span>👥</span> {event.participants}</div>
              </div>
              <p className="prize"><strong>Prize:</strong> {event.prize}</p>
              <button className="join-btn">Join Event</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
