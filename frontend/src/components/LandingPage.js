import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'register' or 'login'
  const navigate = useNavigate();

  const handleRegister = () => {
    setModalType('register');
    setShowModal(true);
  };

  const handleLogin = () => {
    setModalType('login');
    setShowModal(true);
  };

  const handleRoleSelect = (role) => {
    if (modalType === 'register') {
      navigate('/register', { state: { role } });
    } else {
      navigate('/login', { state: { role } });
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="logo-section">
          <div className="logo">
            <div className="bridge-icon">🌉</div>
            <span className="logo-text">SkillBridge</span>
            <div className="tagline">Connecting NGO and Volunteer</div>
          </div>
        </div>

        <div className="main-content">
          <h1>One Platform. Thousands of Opportunities</h1>
          <p>
            SkillBridge connects skilled volunteers with NGOs for meaningful, 
            short-term and long-term opportunities.
          </p>

          <div className="action-buttons">
            <button className="btn btn-register" onClick={handleRegister}>
              Register
            </button>
            <button className="btn btn-login" onClick={handleLogin}>
              Login
            </button>
          </div>

          <div className="footer-text">
            Start your journey today – because every skill matters.
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="role-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            
            <div className="logo-section">
              <div className="logo">
                <div className="bridge-icon">🌉</div>
                <span className="logo-text">SkillBridge</span>
                <div className="tagline">Connecting NGO and Volunteer</div>
              </div>
            </div>

            <div className="role-options">
              <div className="role-option" onClick={() => handleRoleSelect('ngo')}>
                <div className="role-icon ngo-icon">👥</div>
                <button className="role-btn">
                  {modalType === 'register' ? 'Register as NGO' : 'Login as NGO'}
                </button>
              </div>

              <div className="role-option" onClick={() => handleRoleSelect('volunteer')}>
                <div className="role-icon volunteer-icon">🙋</div>
                <button className="role-btn">
                  {modalType === 'register' ? 'Join as Volunteer' : 'Login as Volunteer'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
