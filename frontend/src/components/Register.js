import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useAuth();
  
  const role = location.state?.role || 'volunteer';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
    skills: '',
    bio: '',
    organization_name: '',
    organization_description: '',
    website_url: ''
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

    const userData = {
      ...formData,
      role,
      skills: formData.skills ? formData.skills.split(',').map(s => s.trim()) : []
    };

    const result = await register(userData);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <button className="close-btn" onClick={() => navigate('/')}>×</button>
        
        <div className="logo-section">
          <div className="logo">
            <div className="bridge-icon">🌉</div>
            <span className="logo-text">SkillBridge</span>
            <div className="tagline">Connecting NGO and Volunteer</div>
          </div>
        </div>

        <div className="register-form-container">
          <h2>Create {role === 'ngo' ? 'an NGO' : 'a Volunteer'} Account</h2>
          <p>Join SkillBridge to connect with {role === 'ngo' ? 'volunteers' : 'NGOs'} and volunteering opportunities</p>

          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="name"
                placeholder="Choose a username"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

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
              <label>Location</label>
              <input
                type="text"
                name="location"
                placeholder="e.g New York, NY"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            {role === 'ngo' && (
              <>
                <div className="form-group">
                  <label>Organization Name</label>
                  <input
                    type="text"
                    name="organization_name"
                    placeholder="Enter your organization's name"
                    value={formData.organization_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Organization Description</label>
                  <textarea
                    name="organization_description"
                    placeholder="Tell us about your organization's mission and goals"
                    value={formData.organization_description}
                    onChange={handleChange}
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label>Website URL</label>
                  <input
                    type="url"
                    name="website_url"
                    placeholder="e.g web development"
                    value={formData.website_url}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {role === 'volunteer' && (
              <div className="form-group">
                <label>Skills (optional)</label>
                <input
                  type="text"
                  name="skills"
                  placeholder="e.g web development, graphic design"
                  value={formData.skills}
                  onChange={handleChange}
                />
              </div>
            )}

            {error && <div className="error-message">{error}</div>}

            <button 
              type="submit" 
              className="register-btn"
              disabled={loading}
            >
              {loading ? 'Registering...' : (role === 'ngo' ? 'Register' : 'Join')}
            </button>

            <div className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
