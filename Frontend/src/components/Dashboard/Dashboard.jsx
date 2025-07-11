import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Phoenix Coding Challenge',
    date: '15/01/2024',
    participants: '23/50',
    participation: 46,
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Phoenix Gaming Tournament',
    date: '10/01/2024',
    participants: '45/48',
    participation: 94,
    status: 'completed',
  },
  {
    id: 3,
    title: 'Phoenix Innovation Workshop',
    date: '25/01/2024',
    participants: '8/25',
    participation: 32,
    status: 'upcoming',
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1>Clan Admin Dashboard</h1>
          <p>Manage your clan events and track participation</p>
        </div>
        <Link to="/uploadevent" className="create-btn">+ Create Event</Link>

      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Events</h3>
          <p className="stat-value">12 <span className="stat-change">+2 from last month</span></p>
        </div>
        <div className="stat-card">
          <h3>Active Events</h3>
          <p className="stat-value">3 <span className="stat-sub">Currently running</span></p>
        </div>
        <div className="stat-card">
          <h3>Total Participants</h3>
          <p className="stat-value">156 <span className="stat-change">+12% from last month</span></p>
        </div>
        <div className="stat-card">
          <h3>Completion Rate</h3>
          <p className="stat-value">85% <span className="stat-change">+5% from last month</span></p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="tabs">
          <button className="tab active">My Events</button>
          <button className="tab">Participants</button>
          <button className="tab">Analytics</button>
        </div>

        <div className="events-list">
          {events.map((event) => (
            <div className="event-card" key={event.id}>
              <div className="event-info">
                <div>
                  <h4>{event.title}</h4>
                  <p>{event.date} • {event.participants} participants</p>
                  <p>Participation: {event.participation}%</p>
                </div>
                <div className="event-actions">
                  <span className={`status-tag ${event.status}`}>{event.status}</span>
                  <span className="icon">👁</span>
                  <span className="icon">✏️</span>
                  <span className="icon">🗑️</span>
                </div>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${event.participation}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
