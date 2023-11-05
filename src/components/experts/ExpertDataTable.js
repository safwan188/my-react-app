// src/components/ExpertDataTable.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExpertDataTable.css'; // Ensure this CSS file exists and has the necessary styles

const ExpertDataTable = ({ data }) => {
  const navigate = useNavigate();

  // If no data is provided, display a message
  if (!data || data.length === 0) {
    return <div className="data-table-empty">No experts available.</div>;
  }

  // Define the columns for the Expert data
  const columns = ['name', 'experience'];

  // Handle navigation to the expert form
  const navigateToExpertForm = () => {
    navigate('/expertsform');
  };

  return (
    <div className="data-table-container">
      <button onClick={navigateToExpertForm} className="add-expert-button">
        Add Expert
      </button>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((header) => (
              <th key={header}>{header.charAt(0).toUpperCase() + header.slice(1)}</th> // Capitalize the headers
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((expert, index) => (
            <tr key={index}>
              <td>{expert.name}</td>
              <td>{expert.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpertDataTable;
