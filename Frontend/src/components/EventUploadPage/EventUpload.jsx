import React, { useState } from 'react';
import './EventUpload.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../utils';

const EventUpload = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    EventTitle: '',
    Description: '',
    Category: '',
    Date: '',
    Time: '',
    Location: '',
    Reward: '',
    Requirements: '',
    GoogleFormLink: '',
    poster: null,
  });

  const [loading, setLoading] = useState(false);
  const [posterPreview, setPosterPreview] = useState(null); // preview URL

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        poster: file,
      }));
      setPosterPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const eventData = new FormData();
      for (let key in formData) {
        eventData.append(key, formData[key]);
      }

      const { data } = await axios.post(
        `${BACKEND_URL}api/event/upload`,
        eventData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      toast.success(data.message || "Event created successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Event upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-event-container">
      <div className="header">
        <button className="back-link" onClick={() => window.history.back()}>← Back to Dashboard</button>
        <h1>Create New Event</h1>
        <p>Fill in the details to create an exciting event for your clan</p>
      </div>

      <form className="event-form" onSubmit={handleSubmit}>
        <div className="form-left">
          <div className="card">
            <h2>Event Details</h2>
            <p>Basic information about your event</p>

            <label htmlFor="EventTitle">Event Title *</label>
            <input id="EventTitle" type="text" required placeholder="Enter event title" onChange={handleChange} />

            <label htmlFor="Description">Description *</label>
            <textarea id="Description" required placeholder="Describe your event..." onChange={handleChange}></textarea>

            <label htmlFor="Category">Category *</label>
            <select id="Category" required onChange={handleChange}>
              <option value="">Select event category</option>
              <option value="Tech">Tech</option>
              <option value="Sports">Sports</option>
              <option value="Art">Art</option>
              <option value="Debate">Debate</option>
            </select>
          </div>

          <div className="card">
            <h2>Event Poster</h2>
            <p>Upload an attractive poster for your event</p>
            <div className="upload-box">
              <p>📁 Click to upload or drag and drop</p>
              <p className="upload-hint">PNG, JPG up to 10MB</p>
              <input
                id="poster"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
              {posterPreview && (
                <div className="poster-preview">
                  <p>Preview:</p>
                  <img src={posterPreview} alt="Event Poster Preview" className="preview-image" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="form-right">
          <div className="card">
            <h2>Schedule & Location</h2>
            <p>When and where will your event take place</p>

            <label htmlFor="Date">Event Date *</label>
            <input id="Date" type="date" required onChange={handleChange} />

            <label htmlFor="Time">Event Time *</label>
            <input id="Time" type="time" required onChange={handleChange} />

            <label htmlFor="Location">Location *</label>
            <input id="Location" type="text" required placeholder="Enter event location" onChange={handleChange} />
          </div>

          <div className="card">
            <h2>Participation & Rewards</h2>
            <p>Set limits and incentives for participants</p>

            <label htmlFor="GoogleFormLink">Event Registration Link *</label>
            <input id="GoogleFormLink" type="text" required placeholder="Paste your Google Form link" onChange={handleChange} />

            <label htmlFor="Reward">Prize/Reward</label>
            <input id="Reward" type="text" placeholder="Trophy, Certificate, etc." onChange={handleChange} />

            <label htmlFor="Requirements">Requirements</label>
            <textarea id="Requirements" placeholder="Any special requirements..." onChange={handleChange}></textarea>
          </div>

          <div className="actions">
            <button className="cancel-btn" type="button" disabled={loading}>Cancel</button>
            <button className="create-btn" type="submit" disabled={loading}>
              {loading ? "Uploading..." : "Create Event"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventUpload;
