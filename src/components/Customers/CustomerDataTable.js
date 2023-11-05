// src/components/CustomerDataTable.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerDataTable.css'; // Ensure this CSS file is styled appropriately

const CustomerDataTable = ({ data }) => {
  const navigate = useNavigate();

  const handleAddCustomerClick = () => {
    navigate('/customerform'); // Navigate to customer form
  };

  // Predefined list of strings for the dropdown
  const dropdownOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];

  if (!data || data.length === 0) {
    return <div className="data-table-empty">No customers available.</div>;
  }

  // Define the columns for the Customer data, removed 'id' for simplicity
  const columns = ['name', 'phone', 'options'];

  return (
    <div className="data-table-container">
      <button onClick={handleAddCustomerClick} className="add-customer-button">
        Add Customer
      </button>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((header) => (
              <th key={header}>
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>
                {/* Render dropdown for each customer */}
                <select name="options" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  {dropdownOptions.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDataTable;
