// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import LoginCard from './components/base/LoginCard'
import DataTable from './components/base/DataTable';
import  FormCard from './components/base/FormCard'; // Import the SimpleForm component
import ReportDataTable from './components/reports/ReportDataTable';
import ReportFormCard from './components/reports/ReportFormCard';
import ExpertFormCard from './components/experts/ExpertFormCard';
import ExpertDataTable from './components/experts/ExpertDataTable';
import EquipmentDataTable from './components/Equipment/EquipmentDataTable';
import EquipmentFormCard from './components/Equipment/EquipmentFormCard';
import PropertyDataTable from './components/property/PropertyDataTable';
import PropertyFormCard from './components/property/PropertyFormCard';
import CustomerDataTable from './components/Customers/CustomerDataTable';
import apiEquipments from './api/ApiEquipments'; // Import your API service
import ApiCustomers from './api/ApiCustomers';
import ApiProperty from './api/ApiProperty';

import ApiExperts from './api/ApiExperts';
// Sample data for DataTable
import Sidebar from './components/Sidebar';


import ApiReports from './api/ApiReports';
function App() {
  const [reportsData, setReports] = useState([]);
  useEffect(() => {
    ApiReports.getAllReports()
      .then(response => { 
        setReports(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the reports!", error);
      });
  }, []);
  const [customers, setCustomers] = useState([]);


  useEffect(() => {
    ApiCustomers.getAllCustomers()
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the customers!", error);
      });
  }, []);
  const [propertyData, setProperty] = useState([]);
  useEffect(() => {
    ApiProperty.getAllProperties()
    .then(response => {
      setProperty(response.data);
    } ) 
    .catch(error => {
      console.error("There was an error fetching the property!", error);
    });
  }, []);
  const [expertsData, setExperts] = useState([]);
  useEffect(() => {
    ApiExperts.getAllExperts()
    .then(response => {
      setExperts(response.data);
    } ) 
    .catch(error => {
      console.error("There was an error fetching the experts!", error);
    });
  }, []);
   // State to store the fetched equipment data
   const [equipmentData, setEquipmentData] = useState([]);

   // Fetch equipment data from the API when the component mounts
   useEffect(() => {
     apiEquipments.getAllEquipments()
       .then(response => {
         // Assuming the response contains the equipment data array
         setEquipmentData(response.data);
       })
       .catch(error => {
         console.error("Error fetching equipment data:", error);
       });
   }, []); // The empty array ensures this effect runs only once after the initial render
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<Layout><Sidebar></Sidebar><  DataTable /></Layout>} /> {/* New route for the form */}
        <Route path="/customers" element={<Layout><Header /><CustomerDataTable data={customers} /></Layout>} />
        <Route path="/property" element={<Layout><Header /><PropertyDataTable data={propertyData} /></Layout>} />
        <Route path="/propertyform" element={<Layout><Header /><PropertyFormCard /></Layout>} /> {/* New route for the form */}
        <Route path="/equipmentform" element={<Layout><Header /><EquipmentFormCard /></Layout>} /> {/* New route for the form */}
        <Route path="/equipment" element={<Layout><Header /><EquipmentDataTable data={equipmentData} /></Layout>} />
        <Route path="/expertsform" element={<Layout><Header /><ExpertFormCard /></Layout>} /> {/* New route for the form */}
        <Route path="/experts" element={<Layout><Header /><ExpertDataTable data={expertsData} /></Layout>} />
        <Route path="/" element={<Layout><LoginCard /></Layout>} />
        <Route path="/reports" element={<Layout><Header /><ReportDataTable data={reportsData} /></Layout>} />
        <Route path="/reportsform" element={<Layout><Header /><ReportFormCard /></Layout>} /> {/* New route for the form */}
      </Routes>
    </Router>
  );
}

export default App;
