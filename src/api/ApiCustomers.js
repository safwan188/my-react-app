// src/services/apiCustomers.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/customers'; // Adjust to match your Express server's port and route

const createCustomer = (customerData) => {
  return axios.post(API_URL, customerData);
};

const getAllCustomers = () => {
  return axios.get(API_URL);
};

const getCustomerById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const updateCustomer = (id, updateData) => {
  return axios.put(`${API_URL}/${id}`, updateData);
};

const deleteCustomer = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
};
