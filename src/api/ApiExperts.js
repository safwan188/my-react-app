// src/services/apiExperts.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/experts'; // Adjust to match your Express server's port and route
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const createExpert = (expertData) => {
  return axiosInstance.post(API_URL, expertData);
};

const getAllExperts = () => {
  return axiosInstance.get(API_URL);
};

const getExpertById = (id) => {
  return axiosInstance.get(`${API_URL}/${id}`);
};

const updateExpert = (id, updateData) => {
  return axiosInstance.put(`${API_URL}/${id}`, updateData);
};

const deleteExpert = (id) => {
  return axiosInstance.delete(`${API_URL}/${id}`);
};

// Additional function to get reports for a specific expert
const getExpertReports = (expertId) => {
  return axios.get(`${API_URL}/${expertId}/reports`);
};

export default {
  createExpert,
  getAllExperts,
  getExpertById,
  updateExpert,
  deleteExpert,
  getExpertReports
};
