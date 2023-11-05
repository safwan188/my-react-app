// src/services/apiReports.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reports'; // Adjust to match your Express server's port and route

const createReport = (reportData) => {
  return axios.post(API_URL, reportData);
};

const getAllReports = () => {
  return axios.get(API_URL);
};

const getReportById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const updateReport = (id, updateData) => {
  return axios.put(`${API_URL}/${id}`, updateData);
};

const deleteReport = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport
};
