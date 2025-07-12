import React from 'react';
import './Dashboard.css';

const events = [
  {
    title: "Phoenix Coding Challenge",
    date: "15/01/2024",
    participants: "23/50",
    participation: 46,
    status: "upcoming"
  },
  {
    title: "Phoenix Gaming Tournament",
    date: "10/01/2024",
    participants: "45/48",
    participation: 94,
    status: "completed"
  },
  {
    title: "Phoenix Innovation Workshop",
    date: "25/01/2024",
    participants: "8/25",
    participation: 32,
    status: "upcoming"
  }
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <div>
          <h1>Clan Admin Dashboard</h1>
          <p>Manage your clan events and track participation</p>
        </div>
        <button className="create-btn">+ Create Event</button>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Events</h3>
          <p className="stat-value">12</p>
          <span>+2 from last month</span>
        </div>
        <div className="stat-card">
          <h3>Active Events</h3>
          <p className="stat-value">3</p>
          <span>Currently running</span>
        </div>
        <div className="stat-card">
          <h3>Total Participants</h3>
          <p className="stat-value">156</p>
          <span>+12% from last month</span>
        </div>
        <div className="stat-card">
          <h3>Completion Rate</h3>
          <p className="stat-value">85%</p>
          <span>+5% from last month</span>
        </div>
      </div>

      <div className="tabs">
        <button className="tab active">My Events</button>
        <button className="tab">Participants</button>
        <button className="tab">Analytics</button>
      </div>

      <div className="event-list">
        {events.map((event, idx) => (
          <div key={idx} className="event-card">
            <div className="event-info">
              <div>
                <h3>{event.title}</h3>
                <p>{event.date} • {event.participants} participants</p>
                <p className="participation-text">Participation: {event.participation}%</p>
              </div>
              <div className="event-actions">
                <span className={`status ${event.status}`}>{event.status}</span>
                <div className="icons">
                  <span>👁️</span>
                  <span>✏️</span>
                  <span>🗑️</span>
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${event.participation}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
