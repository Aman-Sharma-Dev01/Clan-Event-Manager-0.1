import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import './AllWinnersSlideshow.css'; // Import its dedicated CSS

// --- HARDCODED WINNER DATA FOR ALL EVENTS ---
const allEventSlides = [
  {
    type: 'orientation',
    id: 'orientation_slide_1',
    eventHeading: 'Orientation Culmination Awards',
    awards: [
      { title: 'Interactive Star', winner: 'Bhumika Adana', department: 'B.Ed.' },
      { title: 'Jump in Genius', winner: 'Aditya', department: 'BBA' },
      { title: 'Forever First', winner: 'Akansha', department: 'Robotics' },
      { title: 'Queen of Confidence', winner: 'Akshi', department: 'BBA' },
      { title: 'Outstanding Performer (School of Engineering)', winner: 'TBD', department: '' },
      { title: 'Outstanding Performer (School of Law)', winner: 'TBD', department: '' },
      { title: 'Outstanding Performer (School of Management and Commerce)', winner: 'TBD', department: '' },
      { title: 'Outstanding Performer (School of Education and Humanities)', winner: 'TBD', department: '' },
    ]
  },
  
  {
    type: 'treasure_hunt',
    id: 'treasure_hunt_slide_1',
    eventHeading: 'Treasure Hunt Awardees',
    timeTaken: "29 Mins 22 Seconds",
    winner1: { team: "Team Chaos", members: ["Pranjal", "Ansh"], photo: { url: "https://placehold.co/150x150/FFD700/000?text=Chaos" } }, // Photo URL is now unused
    winner2: { team: "Team Mighty Raju", members: ["Raj", "Gopal", "Debashish", "Ritham"], photo: { url: "https://placehold.co/150x150/C0C0C0/000?text=Raju" } }, // Photo URL is now unused
    winner3: { team: "Team Kingdom", members: ["Pushkar", "Abhishek", "Jai", "Rohan"], photo: { url: "https://placehold.co/150x150/CD7F32/000?text=Kingdom" } }, // Photo URL is now unused
  },
  {
    type: 'talent_hunt',
    id: 'talent_hunt_slide_1',
    eventHeading: 'Talent Hunt Awardees',
    awardees: [
      { category: "Dance – “Dancing Dynamo”", winner: "Jigyasa Belwal", department: "CSE" },
      { category: "Singing – “Melody Maestro”", winner: "Krishna Arya", department: "BCA" },
      { category: "Instrumental – “Tune Titan”", winner: "Rajeshwari Sarkar", department: "CSE" },
      { category: "Fashion Walk – “Style Icon”", winner: "Vanshika Kataria", department: "BA B.Ed." },
      { category: "Poetry/Shayari – “Mic Drop Poet”", winner: "Krish Khattar", department: "BBA" },
      { category: "Painting- “Master of Colours”", winner: "Avipsa Gon", department: "CSE" },
    ]
  },
  // Add more event slides here if needed, following the same structure
];
// --- END HARDCODED WINNER DATA ---


const AllWinnersSlideshow = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const canvasRef = useRef(null);
  const confettiInstance = useRef(null);

  // Initialize confetti on mount
  useEffect(() => {
    if (canvasRef.current && !confettiInstance.current) {
      confettiInstance.current = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
      });
    }
  }, []);

  // Confetti effect on slide change
  useEffect(() => {
    const shootConfetti = () => {
      if (confettiInstance.current) {
        confettiInstance.current({ particleCount: 200, angle: 60, spread: 90, origin: { x: 0 }, scalar: 1 });
        confettiInstance.current({ particleCount: 200, angle: 120, spread: 90, origin: { x: 1 }, scalar: 1 });
        confettiInstance.current({ particleCount: 200, angle: 90, spread: 90, origin: { y: 0.02 }, scalar: 1 });
      }
    };

    shootConfetti(); // Initial burst and on every slide change
    const interval = setInterval(shootConfetti, 2500); // Repeat confetti
    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  // Automatic slideshow logic
  useEffect(() => {
    if (allEventSlides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlideIndex(prevIndex => (prevIndex + 1) % allEventSlides.length);
      }, 8000); // Change slide every 8 seconds
      return () => clearInterval(interval);
    }
  }, [allEventSlides.length]);

  const currentSlide = allEventSlides[currentSlideIndex];

  // Removed renderTreasureWinnerCard as it's no longer needed

  return (
    <div className="all-winners-slideshow-section bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      <canvas ref={canvasRef} className="confetti-canvas"></canvas>

      <div key={currentSlide.id} className="slideshow-content relative w-full max-w-4xl rounded-3xl shadow-2xl p-6 sm:p-10 text-center animate-fade-in-out border border-purple-700">
        <h2 className="event-heading text-4xl sm:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500 drop-shadow-lg leading-tight">
          {currentSlide.eventHeading}
        </h2>

        {/* Render content based on slide type */}
        {currentSlide.type === 'orientation' && (
          <div className="orientation-awards-grid grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {currentSlide.awards.map((award, index) => (
              <div key={index} className="award-item bg-gray-700 bg-opacity-70 backdrop-filter backdrop-blur-sm p-5 rounded-xl shadow-lg border border-gray-600 hover:scale-105 transition-transform duration-300">
                <p className="award-title text-lg font-semibold text-purple-300 mb-1">{award.title}:</p>
                <p className="award-winner text-xl font-bold text-yellow-300 leading-snug">{award.winner} <span className="text-gray-300 text-base font-normal">({award.department})</span></p>
              </div>
            ))}
          </div>
        )}

        {currentSlide.type === 'treasure_hunt' && (
          <div className="treasure-hunt-display grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* First Prize */}
            <div className="treasure-prize-card prize-1 bg-gradient-to-br from-yellow-600 to-yellow-800 p-6 rounded-xl shadow-xl border-2 border-yellow-400 transform hover:scale-105 transition-transform duration-300">
              <h3 className="prize-label text-3xl font-extrabold text-white mb-3 drop-shadow-lg">1st Prize</h3>
              <p className="team-name text-2xl font-bold text-yellow-200 mb-2">{currentSlide.winner1.team}</p>
              <p className="members-list text-lg text-yellow-100">{currentSlide.winner1.members.join(', ')}</p>
            </div>

            {/* Second Prize */}
            <div className="treasure-prize-card prize-2 bg-gradient-to-br from-gray-500 to-gray-700 p-6 rounded-xl shadow-xl border-2 border-gray-400 transform hover:scale-105 transition-transform duration-300">
              <h3 className="prize-label text-3xl font-extrabold text-white mb-3 drop-shadow-lg">2nd Prize</h3>
              <p className="team-name text-2xl font-bold text-gray-200 mb-2">{currentSlide.winner2.team}</p>
              <p className="members-list text-lg text-gray-100">{currentSlide.winner2.members.join(', ')}</p>
            </div>

            {/* Third Prize */}
            <div className="treasure-prize-card prize-3 bg-gradient-to-br from-amber-700 to-amber-900 p-6 rounded-xl shadow-xl border-2 border-amber-500 transform hover:scale-105 transition-transform duration-300">
              <h3 className="prize-label text-3xl font-extrabold text-white mb-3 drop-shadow-lg">3rd Prize</h3>
              <p className="team-name text-2xl font-bold text-amber-200 mb-2">{currentSlide.winner3.team}</p>
              <p className="members-list text-lg text-amber-100">{currentSlide.winner3.members.join(', ')}</p>
            </div>

            <p className="treasure-time text-xl font-semibold text-gray-300 mt-6 md:col-span-3">
              Time Taken by 1st Place: <span className="text-yellow-300 font-bold">{currentSlide.timeTaken}</span>
            </p>
          </div>
        )}

        {currentSlide.type === 'talent_hunt' && (
          <div className="talent-hunt-display grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {currentSlide.awardees.map((awardee, index) => (
              <div key={index} className="talent-award-item bg-gray-700 bg-opacity-70 backdrop-filter backdrop-blur-sm p-5 rounded-xl shadow-lg border border-gray-600 hover:scale-105 transition-transform duration-300">
                <p className="talent-category text-lg font-semibold text-purple-300 mb-1">{awardee.category}:</p>
                <p className="talent-winner text-xl font-bold text-yellow-300 leading-snug">{awardee.winner} <span className="text-gray-300 text-base font-normal">({awardee.department})</span></p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllWinnersSlideshow;
