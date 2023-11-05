// src/components/PropertyFormCard.js
import React, { useState } from 'react';
import './PropertyFormCard.css'; // Make sure to create this CSS file for styling

const PropertyFormCard = () => {
  const [customerName, setCustomerName] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with:', { customerName, city, street, streetNumber });
    // Additional logic for what happens on form submit
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} className="form-card-content">
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="streetNumber">Street Number:</label>
          <input
            type="text"
            id="streetNumber"
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
          />
        </div>
        <button type="submit" className="form-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default PropertyFormCard;
