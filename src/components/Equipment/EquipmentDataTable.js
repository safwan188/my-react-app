import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EquipmentDataTable.css'; // Ensure this CSS file exists and has the necessary styles

const EquipmentDataTable = ({ data }) => {
  const navigate = useNavigate();

  // If no data is provided, display a message
  if (!data || data.length === 0) {
    return <div className="data-table-empty">No equipment available.</div>;
  }

  // Define the columns for the equipment data
  const columns = ['name', 'imageURL']; // Adjusted to only include 'name' and 'imageURL'

  // Handle navigation to the equipment form
  const navigateToEquipmentForm = () => {
    navigate('/equipmentform');
  };

  return (
    <div className="data-table-container">
      <button onClick={navigateToEquipmentForm} className="add-equipment-button">
        Add Equipment
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
          {data.map((item, index) => (
            <tr key={index}>
              {/* Render only the 'name' and 'imageURL' columns */}
              <td key={`${index}-name`}>{item.name}</td>
              <td key={`${index}-imageUrl`}>{item.imageUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentDataTable;
