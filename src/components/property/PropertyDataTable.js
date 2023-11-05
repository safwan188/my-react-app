// src/components/PropertyDataTable.js
import React from 'react';
import './PropertyDataTable.css'; // Ensure this CSS file exists and has the necessary styles
import { useNavigate } from 'react-router-dom';

const PropertyDataTable = ({ data }) => {
    const navigate = useNavigate();
  if (!data || data.length === 0) {
    return <div className="data-table-empty">No properties available.</div>;
  }

  // Define the columns for the Property data
  const columns = ['customerName', 'city', 'street', 'propertyNumber'];
  const handleAddPropertyClick = () => {
    navigate('/propertyform'); // Path to your property form route
  };
  return (
    <div className="data-table-container">
        <button onClick={handleAddPropertyClick} className="add-property-button">
        Add Property
      </button>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((header) => (
              <th key={header}>{header.replace(/([A-Z])/g, ' $1').trim().replace('Number', ' No.')}</th> // Format the headers
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((property, index) => (
            <tr key={index}>
              <td>{property.customerId}</td>
              <td>{property.cityName}</td>
              <td>{property.street}</td>
              <td>{property.propertyNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyDataTable;
