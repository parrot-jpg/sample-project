import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="logo">
          <div className="bridge-icon">🌉</div>
          <span className="logo-text">SkillBridge</span>
          <div className="tagline">Connecting NGO and Volunteer</div>
        </div>
        
        <nav className="dashboard-nav">
          <a href="#dashboard" className="nav-link active">Dashboard</a>
          <a href="#opportunities" className="nav-link">Opportunities</a>
          <a href="#applications" className="nav-link">Applications</a>
          <a href="#messages" className="nav-link">Messages</a>
          <div className="notification-icon">🔔</div>
          <button className="close-btn" onClick={handleLogout}>×</button>
        </nav>
      </header>

      <div className="dashboard-content">
        <div className="user-profile">
          <div className="profile-avatar">
            {user?.name?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <div className="profile-info">
            <h3>{user?.name || 'Test User'}</h3>
            <p className="user-role">{user?.role?.toUpperCase() || 'USER'}</p>
          </div>
        </div>

        {user?.role === 'ngo' ? (
          <div className="ngo-dashboard">
            <div className="dashboard-section">
              <div className="section-card overview-card">
                <h4>Overview</h4>
                <div className="stats">
                  <div className="stat-item active">
                    <span className="stat-label">Active Opportunities</span>
                    <span className="stat-value">3</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Applications</span>
                    <span className="stat-value">1</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Active Volunteers</span>
                    <span className="stat-value">0</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Pending Applications</span>
                    <span className="stat-value">1</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-section">
              <div className="section-card">
                <div className="section-header">
                  <h4>Find Opportunities</h4>
                  <button className="view-all-btn">View All</button>
                </div>
                
                <div className="opportunity-item">
                  <div className="opportunity-info">
                    <h5>Website Redesign for Local Shelter</h5>
                    <p>Help us redesign our website to improve our online presence and reach more potential adopters.</p>
                  </div>
                  <button className="apply-btn">APPLY</button>
                </div>
                
                <div className="opportunity-item">
                  <div className="opportunity-info">
                    <h5>Fundraising Gala Event Coordinator</h5>
                    <p>Help plan and coordinate our annual fundraising gala to support children's medical research.</p>
                  </div>
                  <button className="apply-btn">APPLY</button>
                </div>
              </div>
            </div>

            <div className="dashboard-section">
              <div className="section-card">
                <div className="section-header">
                  <h4>Recent Applications</h4>
                  <button className="view-all-btn">View All</button>
                </div>
                <div className="application-item">
                  <div className="application-info">
                    <h5>John Doe</h5>
                    <p>Applied for: Website Redesign for Local Shelter</p>
                    <p className="application-message">
                      I have 5 years of experience in web development and design. 
                      I would love to improve your online presence.
                    </p>
                  </div>
                  <span className="status-badge pending">pending</span>
                </div>
              </div>
            </div>

            <div className="dashboard-section">
              <div className="section-card">
                <h4>Quick Actions</h4>
                <button className="action-btn">
                  <span className="plus-icon">+</span>
                  Create Opportunities
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="volunteer-dashboard">
            <div className="dashboard-section">
              <div className="section-card">
                <div className="section-header">
                  <h4>Your Skills</h4>
                  <button className="add-btn">+ Add new skills</button>
                </div>
                <p className="no-skills">No skills added yet</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
