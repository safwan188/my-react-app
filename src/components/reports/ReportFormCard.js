// src/components/ReportFormCard.js
import React, { useState } from 'react';
import './ReportFormCard.css'; // You can reuse the FormCard.css if it fits the styling needs

const ReportFormCard = () => {
  const [reportId, setReportId] = useState('');
  const [reportDate, setReportDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [property, setProperty] = useState('');
  const [expertName, setExpertName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Report form submitted with:', { reportId, reportDate, customerName, property, expertName, status });
    // Additional logic for what happens on form submit
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} className="form-card-content">
        <div className="form-group">
          <label htmlFor="reportId">Report ID:</label>
          <input
            type="text"
            id="reportId"
            value={reportId}
            onChange={(e) => setReportId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reportDate">Date:</label>
          <input
            type="date"
            id="reportDate"
            value={reportDate}
            onChange={(e) => setReportDate(e.target.value)}
          />
        </div>
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
          <label htmlFor="property">Property:</label>
          <input
            type="text"
            id="property"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expertName">Expert Name:</label>
          <input
            type="text"
            id="expertName"
            value={expertName}
            onChange={(e) => setExpertName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button type="submit" className="form-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ReportFormCard;
