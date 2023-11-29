// src/components/ExpertRequestDataTable.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ExpertRequestDataTable.css'; // Ensure this CSS file exists and has the necessary styles
import ApiReports from '../../api/ApiReports';
import apiExpertRequests from '../../api/apiExpertRequests';
import SearchComponent from '../base/SearchComponent'; // Adjust the path as necessary
import GenericTable from '../base/GenericTable';
const ExpertRequestDataTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expertRequests, setExpertRequests] = useState([]);

  useEffect(() => {
    const fetchExpertRequests = async () => {
      try {
        const response = await apiExpertRequests.getAllExpertRequests();
        setExpertRequests(response.data.filter(expertRequest => expertRequest.status === 'pending'));
      } catch (error) {
        console.error('שגיאה', error);
      }
    };

    fetchExpertRequests();
  }, [location]);
 const handleAccept =async (expertRequestId) => {
 
  const data={
    expert:expertRequestId.expert._id,
    inspectionDate:expertRequestId.date,
    expertRequest:expertRequestId._id
  }
  console.log(data);
  console.log(expertRequestId.report);
  ApiReports.assigExpert(expertRequestId.report._id, data);
  alert("הבקשה אושרה בהצלחה");
  window.location.reload();
};



  // Define the columns for the Expert data

  // Handle navigation to the expert form
  const navigateToExpertForm = () => {
    navigate('/expertsform');
  };
  const renderCell = (item, column) => {
    switch (column) {
      case 'actions':
        return (
          <button
            className="accept-button"
            onClick={() => handleAccept(item)}
          >
            אישור בקשה
          </button>
        );
      case 'report':
        return `${item.report.customer.name}, ${item.report.property.cityName}, ${item.report.property.street}, ${item.report.property.propertyNumber}`;
      case 'date':
        return new Date(item.date).toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' });
      case 'expert':
        return item.expert.name;
      case 'client':
        return item.report.customer.name;
      case 'index':
        return item.report.index;
      default:
        return item[column];
    }
  };

  const columns = ['actions', 'report', 'date', 'expert', 'client', 'index'];
  const columnDisplayNames = {
    report: 'דו״ח',
    expert: 'שם קבלן',
    date: 'תאריך',
    actions: 'פעולות',
    client: 'לקוח',
    index: 'דוח מספר'
  };

  return (
      <GenericTable
        data={expertRequests}
        columns={columns}
        columnDisplayNames={columnDisplayNames}
        renderCell={renderCell}
        title="טבלת בקשות קבלנים"
        buttonText={""}
      />
  );
};

export default ExpertRequestDataTable;
