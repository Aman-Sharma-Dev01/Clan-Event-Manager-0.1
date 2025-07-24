import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import confetti from 'canvas-confetti';
import { useAuth } from '../../Context/AuthProvider.jsx';
import { BACKEND_URL } from '../utils.js';
import './WinnersPhoto.css';
import toast from 'react-hot-toast';

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
      toast.error('Please fill out all fields and provide all three winner photos.');
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
        toast.success('Winners data submitted successfully!');
        window.location.reload();
      }
    } catch (err) {
      toast.error(`Error: ${err.response?.data?.message || 'Failed to submit winners data.'}`);
      console.error(err);
    }
  };

  const handleDeleteAll = async () => {
    if (!winnerDocId) {
      toast.error("No winner data to delete.");
      return;
    }
    // if (!window.confirm("Are you sure you want to delete this winner entry? This action cannot be undone.")) {
    //   return;
    // }
    try {
      const response = await axios.delete(`${BACKEND_URL}/api/winners/${winnerDocId}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success('Winners data deleted successfully!');
        setWinners(initialWinnersState);
        setHeadline('');
        setWinnerDocId(null);
      }
    } catch (err) {
      toast.error(`Error: ${err.response?.data?.message || 'Failed to delete winners data.'}`);
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






// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import axios from 'axios';
// import confetti from 'canvas-confetti';
// import { useAuth } from '../../Context/AuthProvider.jsx';
// import { BACKEND_URL } from '../utils.js'; // Still needed if admin can add new
// import './WinnersPhoto.css';
// import toast from 'react-hot-toast';

// const ADMIN_IDS = [
//   "6870f6f9436c91c3428aa9b2",
//   "6870fbc9883f05472f4eacaf",
//   "6870fb4a0cd078b2ab0b02e0",
//   "6870fc10f93932714cff478a"
// ];

// const initialWinnersState = [
//   { position: '2nd', image: null, name: '', file: null },
//   { position: '1st', image: null, name: '', file: null },
//   { position: '3rd', image: null, name: '', file: null },
// ];

// // --- HARDCODED WINNER DATA ---
// const hardcodedWinnerSets = [
//   {
//     _id: "hardcoded_id_1", // Unique ID for each hardcoded set
//     eventHeading: "Treasure Hunt Awardees",
//     winner1: { photo: { url: "https://res.cloudinary.com/demo/image/upload/v1600000000/sample1.jpg" }, name: "Team Chaos" },
//     winner2: { photo: { url: "https://res.cloudinary.com/demo/image/upload/v1600000000/sample2.jpg" }, name: "Team Mighty Raju" },
//     winner3: { photo: { url: "https://res.cloudinary.com/demo/image/upload/v1600000000/sample3.jpg" }, name: "Team Kingdom" },
//   },
//   {
//     _id: "Talent Hunt Awardees",
//     eventHeading: "Summer Hackathon Grand Finale",
//     winner1: { photo: { url: "https://res.cloudinary.com/demo/image/upload/v1600000000/sample4.jpg" }, name: "Diana Prince" },
//     winner2: { photo: { url: "https://res.cloudinary.com/demo/image/upload/v1600000000/sample5.jpg" }, name: "Ethan Hunt" },
//     winner3: { photo: { url: "https://res.cloudinary.com/demo/image/upload/v1600000000/sample6.jpg" }, name: "Fiona Shrek" },
//   },
//   {
//     _id: "hardcoded_id_3",
//     eventHeading: "Winter Design Challenge",
//     winner1: { photo: { url: "https://res.cloudinary.com/demo/image/upload/v1600000000/sample7.jpg" }, name: "Garry Oldman" },
//     winner2: { photo: { url: "https://res.cloudinary.com/demo/image/upload/v1600000000/sample8.jpg" }, name: "Harry Potter" },
//     winner3: { photo: { url: "https://res.cloudinary.com/demo/image/upload/v1600000000/sample9.jpg" }, name: "Ivy Blossom" },
//   },
//   // Add more hardcoded winner sets as needed
// ];
// // --- END HARDCODED WINNER DATA ---


// const WinnersPhoto = () => {
//   const [allWinnerSets, setAllWinnerSets] = useState([]); // Will be initialized with hardcoded data
//   const [currentWinnerIndex, setCurrentWinnerIndex] = useState(0);
//   const [currentDisplayWinners, setCurrentDisplayWinners] = useState(initialWinnersState);
//   const [currentDisplayHeadline, setCurrentDisplayHeadline] = useState('Your Awesome Event');
//   const [currentWinnerDocId, setCurrentWinnerDocId] = useState(null);

//   // State for adding new winners (only visible to admins)
//   const [newHeadline, setNewHeadline] = useState('Your Awesome Event');
//   const [newWinners, setNewWinners] = useState(initialWinnersState);


//   const { profile } = useAuth();
//   const isAdmin = ADMIN_IDS.includes(profile?._id);
//   const canvasRef = useRef(null);
//   const confettiInstance = useRef(null);

//   // Initialize confetti on mount
//   useEffect(() => {
//     if (canvasRef.current) {
//       confettiInstance.current = confetti.create(canvasRef.current, {
//         resize: true,
//         useWorker: true,
//       });
//     }
//   }, []);

//   // Confetti effect based on currentWinnerDocId
//   useEffect(() => {
//     const shootConfetti = () => {
//       if (confettiInstance.current) {
//         confettiInstance.current({ particleCount: 200, angle: 60, spread: 90, origin: { x: 0 }, scalar: 1 });
//         confettiInstance.current({ particleCount: 200, angle: 120, spread: 90, origin: { x: 1 }, scalar: 1 });
//         confettiInstance.current({ particleCount: 200, angle: 90, spread: 90, origin: { y: 0.02 }, scalar: 1 });
//       }
//     };

//     if (currentWinnerDocId) {
//       shootConfetti();
//       const interval = setInterval(shootConfetti, 2500);
//       return () => clearInterval(interval);
//     }
//   }, [currentWinnerDocId]);

//   // Use useEffect to set hardcoded winners initially
//   useEffect(() => {
//     if (hardcodedWinnerSets.length > 0) {
//       setAllWinnerSets(hardcodedWinnerSets);
//       // Initialize display with the first hardcoded set
//       const firstSet = hardcodedWinnerSets[0];
//       setCurrentWinnerDocId(firstSet._id);
//       setCurrentDisplayHeadline(firstSet.eventHeading);
//       const formattedWinners = [
//         { position: '2nd', image: firstSet.winner2.photo.url, name: firstSet.winner2.name, file: null },
//         { position: '1st', image: firstSet.winner1.photo.url, name: firstSet.winner1.name, file: null },
//         { position: '3rd', image: firstSet.winner3.photo.url, name: firstSet.winner3.name, file: null },
//       ];
//       setCurrentDisplayWinners(formattedWinners);
//     }
//     // No axios call here, as we're hardcoding
//   }, []); // Empty dependency array means this runs once on mount

//   // Automatic slideshow logic (remains the same)
//   useEffect(() => {
//     if (allWinnerSets.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentWinnerIndex(prevIndex => (prevIndex + 1) % allWinnerSets.length);
//       }, 5000); // Change winner every 5 seconds
//       return () => clearInterval(interval);
//     }
//   }, [allWinnerSets.length]);

//   // Update displayed winners when currentWinnerIndex changes (remains the same)
//   useEffect(() => {
//     if (allWinnerSets.length > 0) {
//       const selectedWinnerSet = allWinnerSets[currentWinnerIndex];
//       setCurrentWinnerDocId(selectedWinnerSet._id);
//       setCurrentDisplayHeadline(selectedWinnerSet.eventHeading);
//       const formattedWinners = [
//         { position: '2nd', image: selectedWinnerSet.winner2.photo.url, name: selectedWinnerSet.winner2.name, file: null },
//         { position: '1st', image: selectedWinnerSet.winner1.photo.url, name: selectedWinnerSet.winner1.name, file: null },
//         { position: '3rd', image: selectedWinnerSet.winner3.photo.url, name: selectedWinnerSet.winner3.name, file: null },
//       ];
//       setCurrentDisplayWinners(formattedWinners);
//     }
//   }, [currentWinnerIndex, allWinnerSets]);


//   // --- HANDLER FUNCTIONS TO UPDATE UI FOR *NEW* WINNERS ---
//   const handleImageChange = (e, index) => {
//     const file = e.target.files[0];
//     if (file) {
//       const updatedNewWinners = [...newWinners];
//       updatedNewWinners[index].image = URL.createObjectURL(file); // Creates the preview
//       updatedNewWinners[index].file = file; // Stores the file for upload
//       setNewWinners(updatedNewWinners);
//     }
//   };

//   const handleNameChange = (e, index) => {
//     const updatedNewWinners = [...newWinners];
//     updatedNewWinners[index].name = e.target.value;
//     setNewWinners(updatedNewWinners);
//   };

//   // --- API FUNCTIONS ---
//   // This handleSubmit will still send data to the backend
//   const handleSubmit = async () => {
//     const formData = new FormData();
//     formData.append('eventHeading', newHeadline);
//     const winner1 = newWinners.find(w => w.position === '1st');
//     const winner2 = newWinners.find(w => w.position === '2nd');
//     const winner3 = newWinners.find(w => w.position === '3rd');

//     if (!winner1?.file || !winner2?.file || !winner3?.file || !winner1?.name || !winner2?.name || !winner3?.name || !newHeadline) {
//       toast.error('Please fill out all fields and provide all three winner photos.');
//       return;
//     }

//     formData.append('winner1_name', winner1.name);
//     formData.append('winner1_photo', winner1.file);
//     formData.append('winner2_name', winner2.name);
//     formData.append('winner2_photo', winner2.file);
//     formData.append('winner3_name', winner3.name);
//     formData.append('winner3_photo', winner3.file);

//     try {
//       const response = await axios.post(`${BACKEND_URL}/api/winners/add`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//         withCredentials: true,
//       });
//       if (response.status === 201) {
//         toast.success('Winners data submitted successfully!');
//         // IMPORTANT: If you want the newly added winner to appear in the hardcoded slideshow,
//         // you'd need to fetch *all* winners again from the backend after adding.
//         // For now, reload to reflect the change from the database.
//         window.location.reload();
//       }
//     } catch (err) {
//       toast.error(`Error: ${err.response?.data?.message || 'Failed to submit winners data.'}`);
//       console.error(err);
//     }
//   };

//   // This handleDelete will still interact with the backend
//   const handleDeleteCurrent = async () => {
//     if (!currentWinnerDocId || currentWinnerDocId.startsWith("hardcoded_id_")) {
//       toast.error("Cannot delete hardcoded winner data.");
//       return;
//     }

//     if (!window.confirm("Are you sure you want to delete this winner entry? This action cannot be undone.")) {
//       return;
//     }

//     try {
//       const response = await axios.delete(`${BACKEND_URL}/api/winners/${currentWinnerDocId}`, {
//         withCredentials: true,
//       });
//       if (response.status === 200) {
//         toast.success('Winners data deleted successfully!');
//         // If a real winner from DB is deleted, you'll need to re-fetch to update the slideshow
//         // However, since you're hardcoding, a reload might be the simplest for now
//         window.location.reload(); // Reload to get the updated list from DB (if any were there)
//       }
//     } catch (err) {
//       toast.error(`Error: ${err.response?.data?.message || 'Failed to delete winners data.'}`);
//       console.error(err);
//     }
//   };


//   return (
//     <div className="winners-section">
//       <canvas ref={canvasRef} className="confetti-canvas"></canvas>
//       <div className="winners-content">
//         <div className="winners-title-container">
//           <h2 className="winners-title">WINNERS</h2>
//           <h3 className="winners-headline">{currentDisplayHeadline}</h3>
//         </div>

//         {/* Admin section for adding *new* winners (still uses backend) */}
//         {isAdmin && (
//           <div className="admin-add-section">
//             <hr />
//             <h4>Add New Event Winners</h4>
//             <input
//               type="text"
//               placeholder="Enter The Event Headline Here"
//               className="headline-input"
//               value={newHeadline}
//               onChange={(e) => setNewHeadline(e.target.value)}
//             />
//             <div className="winners-container">
//               {newWinners.map((winner, index) => {
//                 const frameClass =
//                   winner.position === '1st' ? 'frame-gold' :
//                     winner.position === '2nd' ? 'frame-silver' : 'frame-bronze';
//                 return (
//                   <div className={`winner-card winner-${winner.position.toLowerCase()}`} key={`new-${index}`}>
//                     <div className={`winner-image-wrapper ${frameClass}`}>
//                       <div className={`winner-badge badge-${winner.position.toLowerCase()}`}>{winner.position}</div>
//                       {winner.image ? (
//                         <img src={winner.image} alt={`${winner.position} Winner`} className="winner-image" />
//                       ) : (
//                         <div className="placeholder-image"><span>+</span><p>Add Photo</p></div>
//                       )}
//                     </div>
//                     <div className="winner-info">
//                       <input
//                         type="text"
//                         placeholder={`${winner.position} Name`}
//                         className="winner-name-input"
//                         value={winner.name}
//                         onChange={(e) => handleNameChange(e, index)}
//                       />
//                     </div>
//                     <div className="admin-controls">
//                       <label className="file-upload-label">
//                         Choose Photo
//                         <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, index)} />
//                       </label>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//             <button className="submit-btn" onClick={handleSubmit}>⬆️ Upload New Winners</button>
//             <hr />
//           </div>
//         )}

//         {/* Display area for current winners (slideshow) */}
//         <div className="podium-area">
//           <div className="winners-container">
//             {currentDisplayWinners.map((winner, index) => {
//               const frameClass =
//                 winner.position === '1st' ? 'frame-gold' :
//                   winner.position === '2nd' ? 'frame-silver' : 'frame-bronze';
//               return (
//                 <div className={`winner-card winner-${winner.position.toLowerCase()}`} key={`display-${index}`}>
//                   <div className={`winner-image-wrapper ${frameClass}`}>
//                     <div className={`winner-badge badge-${winner.position.toLowerCase()}`}>{winner.position}</div>
//                     {winner.image ? (
//                       <img src={winner.image} alt={`${winner.position} Winner`} className="winner-image" />
//                     ) : (
//                       <div className="placeholder-image"><span>+</span><p>Add Photo</p></div>
//                     )}
//                   </div>
//                   <div className="winner-info">
//                     <h4 className="winner-name">{winner.name || 'Winner Name'}</h4>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="podium-base">
//             <div className="step step-2">2</div>
//             <div className="step step-1">1</div>
//             <div className="step step-3">3</div>
//           </div>
//         </div>

//         {isAdmin && allWinnerSets.length > 0 && (
//           <div className="main-admin-buttons">
//             {/* Disable delete for hardcoded entries */}
//             <button
//               className="delete-btn"
//               onClick={handleDeleteCurrent}
//               disabled={currentWinnerDocId && currentWinnerDocId.startsWith("hardcoded_id_")}
//             >
//               🗑️ Delete Current Displayed Winners
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WinnersPhoto;