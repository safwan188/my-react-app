// src/components/ReportDataTable.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ReportDataTable.css'; // Reuse styles from DataTable.css or customize

const ReportDataTable = ({ data }) => {
  const navigate = useNavigate(); // Get the navigate function

  // Function to handle navigation
  const handleNavigateToForm = () => {
    navigate('/reportsform'); // Navigate to /form when the button is clicked
  };

  // If no data is provided, display a message
  if (!data || data.length === 0) {
    return <div className="data-table-empty">No reports available.</div>;
  }

  // Define the columns you need
  const columns = ['id', 'date', 'customerName', 'property', 'expertName', 'status'];

  return (
    <div className="data-table-container">
      <div className="data-table-header">
        {/* Button to navigate to /form */}
        <button onClick={handleNavigateToForm} className="create-report-button">
          Create New Report
        </button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((header) => (
              <th key={header}>{header.replace(/([A-Z])/g, ' $1').trim()}</th> // Add space before capital letters for headers
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={`${rowIndex}-${column}`}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportDataTable;
