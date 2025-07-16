import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Context/AuthProvider.jsx';
import { BACKEND_URL } from '../utils.js';


const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("events");
  const [events, setEvents] = useState([]);
  const [clanMembers, setClanMembers] = useState([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const { profile } = useAuth();
  const clanName = profile?.clanName || "My Clan"; // Fallback to "My Clan" if clanName is not available

  const uploadEvetnt = () => navigate('/uploadevent');

  useEffect(() => {
    fetchEvents();
    fetchMembers();
  }, []);

    

  const fetchEvents = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/event/myevents`, {
        withCredentials: true,
      });
      setEvents(
  (data.events || []).map(event => ({
    ...event,
    status: (event.status || "")
  }))
);


    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  const fetchMembers = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/event/my-members`, {
        withCredentials: true,
      });
      setClanMembers(data.members || []);
    } catch (error) {
      console.error("Failed to fetch members:", error);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/event/${eventId}`, {
        withCredentials: true,
      });
      setEvents(prev => prev.filter(event => event._id !== eventId));
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event.");
    }
  };

  const toggleEventStatus = async (eventId, currentStatus) => {
      const newStatus = currentStatus === "COMPLETED" ? "UPCOMING" : "COMPLETED";
    try {
      await axios.patch(`${BACKEND_URL}/api/event/${eventId}/status`, 
        { status: newStatus }, 
        { withCredentials: true }
      );
      

      setEvents(prev =>
        prev.map(e => e._id === eventId ? { ...e, status: newStatus } : e)
      );
    } catch (error) {
      console.error("Error toggling status:", error);
      alert("Failed to update event status.");
    }
  };

  // Derive stats
  const totalEvents = events.length;
  const completedEvents = events.filter(e => e.status === "COMPLETED").length;
  const upcomingEvents = events.filter(e => e.status === "UPCOMING").length;
  const totalMembers = clanMembers.length;

  return (
    <div className="dashboard">
      <div className="header">
        <div>
          <h1>Welcome Back, {clanName}</h1>
          <p>Manage your clan events and track participation</p>
        </div>
        <button onClick={uploadEvetnt} className="ctr-btn">

<span className="shadow"></span>
  <span className="edge"></span>
  <span className="front text"> +Create event
  </span> </button>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Events</h3>
          <p className="stat-value">{totalEvents}</p>
        </div>
        <div className="stat-card">
          <h3>Upcoming Events</h3>
          <p className="stat-value">{upcomingEvents}</p>
        </div>
        <div className="stat-card">
          <h3>Total Members</h3>
          <p className="stat-value">{totalMembers}</p>
        </div>
        <div className="stat-card">
          <h3>Completed Events</h3>
          <p className="stat-value">{completedEvents}</p>
        </div>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "events" ? "active" : ""}`}
          onClick={() => setActiveTab("events")}
        >
          My Events
        </button>
        <button
          className={`tab ${activeTab === "members" ? "active" : ""}`}
          onClick={() => setActiveTab("members")}
        >
          My Clan Members
        </button>
      </div>

      {activeTab === "events" ? (
        <div className="event-list">
          {events.map((event, idx) => (
            <div key={idx} className="event-card">
              <div className="event-info">
                <div>
                  <h3>{event.title || event.EventTitle}</h3>
                  <p>{event.date || event.Date}</p>
                </div>
                <div className="event-actions">
                  <span className={`status ${event.status}`}>{event.status}</span>
                  <div className="icons">
                    <span title="View">👁️</span>
                    <span title="Edit">✏️</span>
                    <span title="Delete" onClick={() => setConfirmDeleteId(event._id)}>🗑️</span>
                    <button 
                      className="toggle-status" 
                      onClick={() => toggleEventStatus(event._id, event.status)}
                    >
                      {event.status === "COMPLETED" ? "↩️ Mark Upcoming" : "✅ Mark Completed"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="member-list">
          {clanMembers.map((member, idx) => (
            <div key={idx} className="member-card">
              <h3>{member.name || `${member.Firstname} ${member.Lastname}`}</h3>
              <p>{member.role || "Member"}</p>
            </div>
          ))}
        </div>
      )}

      {confirmDeleteId && (
        <div className="custom-popup">
          <div className="popup-content">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this event?</p>
            <div className="popup-actions">
              <button
                className="confirm-btn"
                onClick={() => {
                  deleteEvent(confirmDeleteId);
                  setConfirmDeleteId(null);
                }}
              >
                Yes, Delete
              </button>
              <button className="cnl-btn" onClick={() => setConfirmDeleteId(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
