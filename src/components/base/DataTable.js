// src/components/DataTable.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DataTable.css'; // Your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const DataTable = ({ data }) => {
  const navigate = useNavigate();  // Get the navigate function

  const handleCreateReport = () => {
    navigate('/createreport'); // Navigate to /createreport when the button is clicked
  };
  // src/data/dummyData.js
const generateDummyData = (numRows, numColumns) => {
  const data = [];
  for (let i = 0; i < numRows; i++) {
    const row = {};
    for (let j = 0; j < numColumns; j++) {
      row[`Column ${j + 1}`] = `Data ${i + 1}-${j + 1}`;
    }
    data.push(row);
  }
  return data;
};
   data = generateDummyData(10, 5);


  if (!data || data.length === 0) {
    return <div className="data-table-empty">No data available.</div>;
  }

  // Get the column headers from the first data object
  const columnHeaders = Object.keys(data[0]);

  return (
    <div className="data-table-container1">
      <div className="data-table-header1">
      <button onClick={handleCreateReport} className="create-button11">
  <FontAwesomeIcon icon={faPlus} />
</button>

      </div>
      <table className="data-table1">
        <thead>
          <tr>
            {columnHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columnHeaders.map((column) => (
                <td key={`${rowIndex}-${column}`}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
