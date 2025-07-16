import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="intro-section">
        <h1>About Our University</h1>
        <p>
          "Our University fosters a holistic and inclusive environment that goes beyond traditional academics, emphasizing not only intellectual excellence but also the personal, social, and professional development of every student. Through our unique and dynamic clan system, we encourage leadership, teamwork, and healthy competition, while a diverse range of co-curricular activities—ranging from cultural events to technical workshops—ensures that students are empowered to discover their passions, develop essential life skills, and become well-rounded individuals ready to lead in a global society."


        </p>
      </section>

      <section className="why-clans-section">
        <h2>Why the Clan System?</h2>
        <div className="content-row">
          <div className="text">
            <p>
              The clan system is designed to create a spirit of teamwork, collaboration, and unity across various disciplines. Students are grouped into four dynamic clans that foster a sense of identity, pride, and motivation.
            </p>
            <ul>
              <li>Encourages interdisciplinary engagement</li>
              <li>Promotes leadership and soft skills</li>
              <li>Develops healthy competition</li>
              <li>Fosters a vibrant campus culture</li>
              <li>Instills a Sense of Identity & Pride</li>
              <li>Strengthens Problem-Solving Abilities</li>
              <li>Builds Lifelong Bonds</li>
            </ul>
          </div>
          <div className="image-wrapper">
            <img src="/assets/clan-1.webp" alt="Clan System" className="responsive-image" />
          </div>
        </div>
      </section>

      <section className="role-section">
        <h2>The Role of the Clans</h2>
        <div className="content-row reverse">
          <div className="image-wrapper">
            <img src="/assets/clan-2.webp" alt="Clan Activity" className="responsive-image" />
          </div>
          <div className="text">
            <p>
              The clans play an integral role in the overall personality development of students by conducting various activities, challenges, and mentorship programs across the year.
            </p>
            <ul>
              <li>Organize cultural and technical events</li>
              <li>Encourage student initiatives</li>
              <li>Support peer learning and mentorship</li>
              <li>Improves Event Management Skills</li>
           </ul>
          </div>
        </div>
      </section>

      <section className="activities-section">
        <h2>Beyond Books – Co-Curricular Life</h2>
        <div className="gallery">
          <div className="activity-card">Yoga Sessions</div>
          <div className="activity-card">Music Club</div>
          <div className="activity-card">Dramatics</div>
          <div className="activity-card">Dance Troupe</div>
          <div className="activity-card">Debates & Quizzes</div>
          <div className="activity-card">Workshops</div>
        </div>
      </section>

      <section className="clan-structure-section">
        <h2>Clan Structure</h2>
        <p>
          Each clan is led by student leaders and guided by faculty mentors. Clan competitions are held regularly, fostering teamwork and healthy rivalry. Performance is tracked across events to award the overall Clan Champion each year.
        </p>
        <div className="clan-logos">
          <div className="logo-card">
            <img src="/assets/WaterShark.jpg" alt="Water Sharks" />
            <p>Water Sharks</p>
          </div>
          <div className="logo-card">
            <img src="/assets/WildCat.jpg" alt="Wild Cats" />
            <p>Wild Cats</p>
          </div>
          <div className="logo-card">
            <img src="/assets/AirFal.jpg" alt="Air Falcons" />
            <p>Air Falcons</p>
          </div>
          <div className="logo-card">
            <img src="/assets/Rhino.jpg" alt="Forest Rhinos" />
            <p>Forest Rhinos</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
