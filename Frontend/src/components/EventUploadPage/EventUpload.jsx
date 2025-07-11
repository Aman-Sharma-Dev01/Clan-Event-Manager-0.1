import React from 'react';
import './EventUpload.css';

const EventUpload = () => {
  return (
    <div className="create-event-container">
      <div className="header">
        <button className="back-link" onClick={() => window.history.back()}>← Back to Dashboard</button>
        <h1>Create New Event</h1>
        <p>Fill in the details to create an exciting event for your clan</p>
      </div>

      <form className="event-form">
        <div className="form-left">
          <div className="card">
            <h2>Event Details</h2>
            <p>Basic information about your event</p>

            <label htmlFor="title">Event Title *</label>
            <input id="title" type="text" placeholder="Enter event title" required />

            <label htmlFor="description">Description *</label>
            <textarea id="description" placeholder="Describe your event in detail..." required></textarea>

            <label htmlFor="category">Category *</label>
            <select id="category" required>
              <option value="">Select event category</option>
              <option>Tech</option>
              <option>Sports</option>
              <option>Art</option>
              <option>Debate</option>
            </select>
          </div>

          <div className="card">
            <h2>Event Poster</h2>
            <p>Upload an attractive poster for your event</p>
            <div className="upload-box">
              <p>📁 Click to upload or drag and drop</p>
              <p className="upload-hint">PNG, JPG up to 10MB</p>
              <input id="poster" type="file" accept="image/*" />
            </div>
          </div>
        </div>

        <div className="form-right">
          <div className="card">
            <h2>Schedule & Location</h2>
            <p>When and where will your event take place</p>

            <label htmlFor="date">Event Date *</label>
            <input id="date" type="date" required />

            <label htmlFor="time">Event Time *</label>
            <input id="time" type="time" required />

            <label htmlFor="location">Location *</label>
            <input id="location" type="text" placeholder="Enter event location" required />
          </div>

          <div className="card">
            <h2>Participation & Rewards</h2>
            <p>Set limits and incentives for participants</p>

            <label htmlFor="maxParticipants">Maximum Participants *</label>
            <input id="maxParticipants" type="number" placeholder="50" required />

            <label htmlFor="reward">Prize/Reward</label>
            <input id="reward" type="text" placeholder="Trophy, Certificate, etc." />

            <label htmlFor="requirements">Requirements</label>
            <textarea id="requirements" placeholder="Any special requirements or prerequisites..."></textarea>
          </div>

          <div className="actions">
            <button className="cancel-btn" type="button">Cancel</button>
            <button className="create-btn" type="submit">Create Event</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventUpload;