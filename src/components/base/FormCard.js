// src/components/FormCard.js
import React, { useState } from 'react';
import './FormCard.css'; // Make sure to create this CSS file for styling

const FormCard = () => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with:', { description, date, time });
    // Additional logic for what happens on form submit
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} className="form-card-content">
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group1">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button type="submit" className="form-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FormCard;
