import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';

const ClanAdminDashboard = ({ clanName }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [greeting, setGreeting] = useState('');
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', image: null });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const hour = new Date().getHours();
    let greet = 'Welcome';
    if (hour < 12) greet = 'Good Morning';
    else if (hour < 18) greet = 'Good Afternoon';
    else greet = 'Good Evening';
    setGreeting(`${greet}, Clan Admin`);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setNewEvent({ ...newEvent, image: imageURL });
    }
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.description) return;

    if (editingId) {
      const updated = events.map((event) =>
        event.id === editingId ? { ...event, ...newEvent, edited: true } : event
      );
      setEvents(updated);
      setEditingId(null);
    } else {
      setEvents([
        ...events,
        {
          ...newEvent,
          id: crypto.randomUUID(),
          date: new Date().toLocaleString(),
          edited: false,
        },
      ]);
    }

    setNewEvent({ title: '', description: '', image: null });
  };

  const handleEdit = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    if (!eventToEdit) return;
    setNewEvent({
      title: eventToEdit.title,
      description: eventToEdit.description,
      image: eventToEdit.image,
    });
    setEditingId(id);
  };

  const handleDelete = (id) => {
    const updated = events.filter((event) => event.id !== id);
    setEvents(updated);
    if (editingId === id) {
      setEditingId(null);
      setNewEvent({ title: '', description: '', image: null });
    }
  };

  return (
    <div className="dashboard-wrapper">
      <aside className={`sidebar ${!sidebarVisible ? 'collapsed' : ''}`}>
        <h2>{clanName} Admin</h2>
        <ul>
          <li>Dashboard</li>
          <li>Post Event</li>
          <li>Manage Events</li>
          <li>Notifications</li>
          <li>Logout</li>
        </ul>
      </aside>

      <main className={`main ${!sidebarVisible ? 'full-width' : ''}`}>
        <header className="topbar">
          <button onClick={toggleSidebar} className="toggle-btn">☰</button>
          <h1>{greeting}</h1>
        </header>

        <section className="welcome-section">
          <div className="welcome-text">
            <h2>Hello, {clanName} Admin 👋</h2>
            <p>Manage your clan's events and updates here.</p>
          </div>
        </section>

        <section className="panel">
          <h3>{editingId ? 'Edit Event' : 'Post a New Event'}</h3>
          <form onSubmit={handleEventSubmit} className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              placeholder="Event Description"
              value={newEvent.description}
              onChange={handleInputChange}
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {newEvent.image && (
              <img
                src={newEvent.image}
                alt="Preview"
                className="preview-image"
              />
            )}
            <button type="submit">
              {editingId ? 'Update Event' : 'Post Event'}
            </button>
          </form>
        </section>

        <section className="panel">
          <h3>Recently Posted Events</h3>
          {events.length === 0 ? (
            <p>No events posted yet.</p>
          ) : (
            <ul className="event-list">
              {events.map((event) => (
                <li key={event.id}>
                  {event.image && (
                    <img
                      src={event.image}
                      alt="Event"
                      className="event-thumbnail"
                    />
                  )}
                  <strong>{event.title}</strong><br />
                  <small>{event.date}{event.edited ? ' (edited)' : ''}</small>
                  <p>{event.description}</p>
                  <div className="event-actions">
                    <button onClick={() => handleEdit(event.id)}>✏️ Edit</button>
                    <button onClick={() => handleDelete(event.id)}>🗑️ Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

ClanAdminDashboard.propTypes = {
  clanName: PropTypes.string.isRequired,
};

export default ClanAdminDashboard;
