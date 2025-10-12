import React, { useState } from 'react';
import { FaBook, FaBriefcase, FaUsers, FaTrophy, FaMedal, FaChevronDown } from 'react-icons/fa';
import './ClanPointsScoreCard.css';

const ClanPointsScoreCard = () => {
  const [expandedSections, setExpandedSections] = useState({ knowledge: true }); // Default open

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const categories = [
    {
      id: 'knowledge',
      title: 'Knowledge Acquisition',
      icon: <FaBook />,
      maxPoints: 500,
      processOwner: 'Dean of School, Director IIC & Librarian',
      activities: [
        {
          title: 'CGPA & Academic Excellence',
          maxPoints: 350,
          details: [
            'CGPA 5-6: 100 points',
            'CGPA 6-7: 150 points',
            'CGPA 7-8: 200 points',
            'CGPA 8-9: 250 points',
            'CGPA 9-10: 300 points',
            'Bonus: 50 points for Dean\'s List'
          ]
        },
        {
          title: 'Online Courses & Certifications',
          maxPoints: 100,
          details: [
            'Online course (30+ hrs): 20 points per course',
            'LinkedIn courses: 1 point per hour',
            'University certification: 5 points (Max 40)',
            'National Level certification: 20 points',
            'International Level certification: 40 points'
          ]
        },
        {
          title: 'Attendance',
          maxPoints: 50,
          details: [
            '80% aggregate: 30 points',
            '85% aggregate: 40 points',
            '90%+ aggregate: 50 points'
          ]
        }
      ]
    },
    {
      id: 'employability',
      title: 'Employability Skill Enhancement',
      icon: <FaBriefcase />,
      maxPoints: 300,
      processOwner: 'Head, 21st Century Learning',
      activities: [
        {
          title: 'Competitions & Publications',
          maxPoints: 150,
          details: [
            'Competition participation: 5 points each (Max 40)',
            'University Level achievement: 5 points',
            'State Level achievement: 10 points',
            'National Level achievement: 20 points',
            'International Level achievement: 30 points',
            'Peer reviewed journal: 30 points',
            'Indexed conference proceedings: 15 points',
            'Article in magazine/newspaper: 10 points',
            'Book chapter (indexed): 10 points',
            'Startup registered: 50 points',
            'Startup unregistered: 25 points',
            'Utility patent published: 30 points',
            'Utility patent granted: 60 points',
            'Design patent granted: 5 points'
          ]
        },
        {
          title: 'Professional Bodies & Events',
          maxPoints: 40,
          details: [
            'Office bearer of professional body: 10 points per semester',
            'Member of professional body: 5 points per semester',
            'Organized intra/inter departmental workshop: 10 points',
            'Organized national/international event: 15 points'
          ]
        },
        {
          title: 'CRC & Placement Activities',
          maxPoints: 40,
          details: [
            'Pre-placement talks: 5 points each (Max 20)',
            'Mock interviews/GDs: 5 points each',
            'Creative writing, debates, extempore: 5 points',
            'Student placement coordinator: 10 points per semester',
            'EEP with 85%+ attendance: 5 points'
          ]
        },
        {
          title: 'Internships & Projects',
          maxPoints: 70,
          details: [
            'Internship stipend ₹50,000+: 35 points',
            'Internship stipend ₹25,000-50,000: 25 points',
            'Internship stipend ₹10,000-25,000: 15 points',
            'MR Impact unpaid internship: 0.5 points per hour (Max 20)',
            'International project: 40 points',
            'National project: 20 points',
            'State project: 10 points',
            'Scholarship above ₹1 lakh: 35 points',
            'Scholarship ₹50,000-1 lakh: 25 points',
            'Scholarship ₹25,000-50,000: 15 points',
            'Scholarship ₹10,000-25,000: 10 points'
          ]
        }
      ]
    },
    {
      id: 'engagement',
      title: 'Student Engagement',
      icon: <FaUsers />,
      maxPoints: 200,
      processOwner: 'DSW & Director Sports',
      activities: [
        {
          title: 'Sports & Cultural Activities',
          maxPoints: 50,
          details: [
            'Participation: 5 points each event (Max 30)',
            'University Level: 5 points',
            'State Level: 10 points',
            'National Level: 20 points',
            'International Level: 30 points',
            'Team spirit & leadership/creativity: 10 points',
            'Physical fitness/collaboration: 10 points'
          ]
        },
        {
          title: 'Social Service & Community',
          maxPoints: 50,
          details: [
            'Community visits: 5 points per visit',
            'Leading visit with 100+ impact: 10 points per event',
            'Leadership in successful campaign: 30 points',
            'Long-term commitment (3+ events): 10 points',
            'Blood donation: 5 points per donation (Max 10)',
            'Volunteering in social causes: 5 points each (Max 20)'
          ]
        },
        {
          title: 'SDG Initiatives',
          maxPoints: 50,
          details: [
            'SDG Leaders: Minimum 5 initiatives over 4 months',
            'SDG Leaders: 3 points per initiative (Min 15, Max 30)',
            'SDG Ambassadors: Minimum 5 initiatives over 4 months',
            'SDG Ambassadors: 2 points per initiative (Min 10, Max 30)',
            'SDG-aligned projects: 5 points per project (Max 20)',
            'Examples: Hygiene sessions, digital literacy, terrace gardening, equity workshops'
          ]
        },
        {
          title: 'Clan & University Activities',
          maxPoints: 50,
          details: [
            'Office bearer of clan: 15 points per semester',
            'Member of clan/university team: 10 points per semester (Max 30)',
            'Volunteer for events: 5 points each (Max 20)',
            'Winner of university/clan event: 10 points per event',
            'Participation in events: 5 points each (Max 20)',
            'Committee member/organizer: 5-10 points each (Max 30)',
            'Technical/cultural fest organizer: 10-15 points each (Max 30)'
          ]
        }
      ]
    }
  ];

  return (
    <div className="clan-points-container">
      <div className="content-wrapper">
        <div className="header-card">
          <div className="header-content">
            <div className="header-text">
              <p className="subtitle">Clan Points Evaluation System</p>
              <h1 className="main-title">Comprehensive Score Card</h1>
            </div>
            <div className="trophy-icon"><FaTrophy /></div>
          </div>
          
          <div className="overview-grid">
            <div className="overview-card knowledge-card">
              <div className="overview-icon-wrapper"><FaBook /></div>
              <div className="overview-points">500</div>
              <div className="overview-label">Knowledge Acquisition</div>
            </div>
            <div className="overview-card employability-card">
              <div className="overview-icon-wrapper"><FaBriefcase /></div>
              <div className="overview-points">300</div>
              <div className="overview-label">Employability Skills</div>
            </div>
            <div className="overview-card engagement-card">
              <div className="overview-icon-wrapper"><FaUsers /></div>
              <div className="overview-points">200</div>
              <div className="overview-label">Student Engagement</div>
            </div>
          </div>
          
          <div className="total-banner">
            <div className="total-icon"><FaMedal /></div>
            <div>
              <div className="total-title">Overall Maximum: 1000 Points</div>
              <div className="total-subtitle">Evaluation across all categories</div>
            </div>
          </div>
        </div>

        {categories.map((category) => {
          const isExpanded = !!expandedSections[category.id];
          return (
            <div key={category.id} className={`category-section ${category.id}`}>
              <div 
                className="category-header"
                onClick={() => toggleSection(category.id)}
              >
                <div className="category-header-left">
                  <span className="category-icon">{category.icon}</span>
                  <div>
                    <h2 className="category-title">{category.title}</h2>
                    <p className="category-owner">{category.processOwner}</p>
                  </div>
                </div>
                <div className="category-header-right">
                  <div className="category-points-badge">{category.maxPoints} pts</div>
                  <span className={`chevron-icon ${isExpanded ? 'expanded' : ''}`}>
                    <FaChevronDown />
                  </span>
                </div>
              </div>
              <div className={`category-content ${isExpanded ? 'expanded' : ''}`}>
                <div className="category-content-inner">
                  {category.activities.map((activity, idx) => (
                    <div key={idx} className="activity-card">
                      <div className="activity-header">
                        <h3 className="activity-title">{activity.title}</h3>
                        <span className="activity-badge">Max: {activity.maxPoints} pts</span>
                      </div>
                      <ul className="activity-list">
                        {activity.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="activity-item">
                            <span className="detail-text">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        <div className="footer-card">
          <p className="footer-text">This comprehensive score card evaluates student performance across academic, professional, and social dimensions.</p>
          <p className="footer-subtext">Manav Rachna University - Empowering Excellence</p>
        </div>
      </div>
    </div>
  );
};

export default ClanPointsScoreCard;