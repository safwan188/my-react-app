// src/components/ExpertFormCard.js
import React, { useState } from 'react';
import './ExpertFormCard.css'; // Reusing the styling from FormCard.css

const ExpertFormCard = () => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Expert Form submitted with:', { name, experience });
    // Here you might want to send the data to a server or update the state in your application
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} className="form-card-content">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience:</label>
          <input
            type="text"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <button type="submit" className="form-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ExpertFormCard;
