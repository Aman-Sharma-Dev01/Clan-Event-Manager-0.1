import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import confetti from 'canvas-confetti';
import { useAuth } from '../../Context/AuthProvider.jsx';
import { BACKEND_URL } from '../utils.js';
import './WinnersPhoto.css';

const ADMIN_IDS = [
  "6870f6f9436c91c3428aa9b2",
  "6870fbc9883f05472f4eacaf",
  "6870fb4a0cd078b2ab0b02e0",
  "6870fc10f93932714cff478a"
];

const initialWinnersState = [
  { position: '2nd', image: null, name: '', file: null },
  { position: '1st', image: null, name: '', file: null },
  { position: '3rd', image: null, name: '', file: null },
];

const WinnersPhoto = () => {
  const [winners, setWinners] = useState(initialWinnersState);
  const [headline, setHeadline] = useState('Your Awesome Event');
  const [winnerDocId, setWinnerDocId] = useState(null);
  const { profile } = useAuth();
  const isAdmin = ADMIN_IDS.includes(profile?._id);
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_URL}/api/winners/all`, { withCredentials: true });
        if (data.winners && data.winners.length > 0) {
          const latestWinners = data.winners[0];
          setWinnerDocId(latestWinners._id);
          setHeadline(latestWinners.eventHeading);
          const formattedWinners = [
            { position: '2nd', image: latestWinners.winner2.photo.url, name: latestWinners.winner2.name, file: null },
            { position: '1st', image: latestWinners.winner1.photo.url, name: latestWinners.winner1.name, file: null },
            { position: '3rd', image: latestWinners.winner3.photo.url, name: latestWinners.winner3.name, file: null },
          ];
          setWinners(formattedWinners);
        }
      } catch (err) {
        console.error("Failed to fetch winners:", err);
      }
    };
    fetchWinners();
  }, []);

  useEffect(() => {
    if (winnerDocId && canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
      });
      const shootConfetti = () => {
        myConfetti({particleCount: 200,angle: 60,spread: 90,origin: { x: 0 },scalar: 1});
        myConfetti({
particleCount: 200,
angle: 120,
spread: 90,
origin: { x: 1 },
scalar: 1 
});
 myConfetti({
particleCount: 200,
angle: 90,
spread: 90,
origin: { y: 0.02 },
scalar: 1 // 👈 Makes confetti smaller });
});
      }
      shootConfetti();
      const interval = setInterval(shootConfetti, 2500);
      return () => clearInterval(interval);
    }
  }, [winnerDocId]);

  // --- HANDLER FUNCTIONS TO UPDATE UI ---
  // This function updates the state when you select an image file.
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newWinners = [...winners];
      newWinners[index].image = URL.createObjectURL(file); // Creates the preview
      newWinners[index].file = file; // Stores the file for upload
      setWinners(newWinners);
    }
  };

  // This function updates the state as you type a winner's name.
  const handleNameChange = (e, index) => {
    const newWinners = [...winners];
    newWinners[index].name = e.target.value;
    setWinners(newWinners);
  };

  // --- API FUNCTIONS ---
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('eventHeading', headline);
    const winner1 = winners.find(w => w.position === '1st');
    const winner2 = winners.find(w => w.position === '2nd');
    const winner3 = winners.find(w => w.position === '3rd');
    if (!winner1?.file || !winner2?.file || !winner3?.file || !winner1?.name || !winner2?.name || !winner3?.name || !headline) {
      alert('Please fill out all fields and provide all three winner photos.');
      return;
    }
    formData.append('winner1_name', winner1.name);
    formData.append('winner1_photo', winner1.file);
    formData.append('winner2_name', winner2.name);
    formData.append('winner2_photo', winner2.file);
    formData.append('winner3_name', winner3.name);
    formData.append('winner3_photo', winner3.file);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/winners/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (response.status === 201) {
        alert('Winners data submitted successfully!');
        window.location.reload();
      }
    } catch (err) {
      alert(`Error: ${err.response?.data?.message || 'Failed to submit winners data.'}`);
      console.error(err);
    }
  };

  const handleDeleteAll = async () => {
    if (!winnerDocId) {
      alert("No winner data to delete.");
      return;
    }
    if (!window.confirm("Are you sure you want to delete this winner entry? This action cannot be undone.")) {
      return;
    }
    try {
      const response = await axios.delete(`${BACKEND_URL}/api/winners/${winnerDocId}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        alert('Winners data deleted successfully!');
        setWinners(initialWinnersState);
        setHeadline('');
        setWinnerDocId(null);
      }
    } catch (err) {
      alert(`Error: ${err.response?.data?.message || 'Failed to delete winners data.'}`);
      console.error(err);
    }
  };

  return (
    <div className="winners-section">
      <canvas ref={canvasRef} className="confetti-canvas"></canvas>
      <div className="winners-content">
        <div className="winners-title-container">
          <h2 className="winners-title">WINNERS</h2>
          <h3 className="winners-headline">{headline}</h3>
        </div>
        {isAdmin && !winnerDocId && (
          <input
            type="text"
            placeholder="Enter The Event Headline Here"
            className="headline-input"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
          />
        )}
        <div className="podium-area">
          <div className="winners-container">
            {winners.map((winner, index) => {
              const frameClass = 
                winner.position === '1st' ? 'frame-gold' :
                winner.position === '2nd' ? 'frame-silver' : 'frame-bronze';
              return (
                <div className={`winner-card winner-${winner.position.toLowerCase()}`} key={index}>
                  <div className={`winner-image-wrapper ${frameClass}`}>
                    <div className={`winner-badge badge-${winner.position.toLowerCase()}`}>{winner.position}</div>
                    {winner.image ? (
                      <img src={winner.image} alt={`${winner.position} Winner`} className="winner-image" />
                    ) : (
                      <div className="placeholder-image"><span>+</span><p>Add Photo</p></div>
                    )}
                  </div>
                  <div className="winner-info">
                    {isAdmin && !winnerDocId ? (
                      <input
                        type="text"
                        placeholder={`${winner.position} Name`}
                        className="winner-name-input"
                        value={winner.name}
                        onChange={(e) => handleNameChange(e, index)}
                      />
                    ) : (
                      <h4 className="winner-name">{winner.name || 'Winner Name'}</h4>
                    )}
                  </div>
                  {isAdmin && !winnerDocId && (
                    <div className="admin-controls">
                      <label className="file-upload-label">
                        Choose Photo
                        <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, index)} />
                      </label>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="podium-base">
            <div className="step step-2">2</div>
            <div className="step step-1">1</div>
            <div className="step step-3">3</div>
          </div>
        </div>
        {isAdmin && (
          <div className="main-admin-buttons">
            {!winnerDocId ? (
              <button className="submit-btn" onClick={handleSubmit}>⬆️ Upload All Winners</button>
            ) : (
              <button className="delete-btn" onClick={handleDeleteAll}>🗑️ Delete Winners</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WinnersPhoto;