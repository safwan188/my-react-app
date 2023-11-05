import React from 'react';
import './sidebar.css'; // Make sure to create this CSS file for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
       <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/Picture1.png`} alt="Logo" className="login-logo" />
      </div>
      <nav>
        <ul className="sidebar-nav">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">Reports</a></li>
          <li className="nav-item"><a href="#">Experts</a></li>
          <li className="nav-item"><a href="#">Customers</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
