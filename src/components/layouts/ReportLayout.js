import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReportLayout.css';

const ReportLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    // If there's no token and the user is not on the login page, redirect to '/'
    if (!token && window.location.pathname !== '/') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="Report-layout">
      {children}
    </div>
  );
};

export default ReportLayout;
