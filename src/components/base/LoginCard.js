import React, { useState } from 'react';
import './LoginCard.css'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';


const LoginCard = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted:', { username, password });
    navigate('/reports');
  };

 return (
  <div className="login-card1" style={{ transition: 'box-shadow 0.3s ease-in-out' }}>
    <div className="login-content">
      {/* Logo image */}
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/Picture1.png`} alt="Logo" className="login-logo" />
      </div>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="form-group1">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button1">Login</button>
      </form>
    </div>
  </div>
);
};

export default LoginCard;
