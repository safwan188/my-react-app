// src/components/EquipmentFormCard.js
import React, { useState } from 'react';
import './EquipmentFormCard.css'; // Ensure you have the corresponding CSS file

const EquipmentFormCard = () => {
  const [name, setName] = useState('');
  const [imagePath, setImagePath] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming you will handle the form submission here
    console.log('Equipment Submitted:', { name, imagePath });
    // You might want to reset the form or give feedback to the user here
  };

  // Handles the file selection and updates the image path state
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePath(file.name); // You may want to use a FileReader to read the file if you need to display it or upload it
    }
  };

  return (
    <div className="equipment-form-card">
      <form onSubmit={handleSubmit} className="equipment-form-content">
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
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
        <button type="submit" className="equipment-form-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default EquipmentFormCard;
