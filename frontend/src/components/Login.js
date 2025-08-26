import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  const role = location.state?.role || 'volunteer';
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(formData.email, formData.password, role);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <button className="close-btn" onClick={() => navigate('/')}>×</button>
        
        <div className="logo-section">
          <div className="logo">
            <div className="bridge-icon">🌉</div>
            <span className="logo-text">SkillBridge</span>
            <div className="tagline">Connecting NGO and Volunteer</div>
          </div>
        </div>

        <div className="login-form-container">
          <h2>Login to your Account</h2>
          <p>Join SkillBridge to connect with {role === 'ngo' ? 'volunteers' : 'NGOs'} and volunteering opportunities</p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>I am</label>
              <input
                type="text"
                value={role === 'ngo' ? 'NGO' : 'Volunteer'}
                disabled
                className="role-input"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button 
              type="submit" 
              className="login-btn"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="register-link">
              Don't have an account? <Link to="/register">Register/Join</Link><br/>
              <Link to="#" className="forgot-password">Forgot Password</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
