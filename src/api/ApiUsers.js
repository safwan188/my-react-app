// src/services/apiUsers.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // Adjust to match your Express server's port and route




const LoginUser = (username, password) => {
    return axios.post(`${API_URL}/login`, {
        username,
        password,
    });
    };

export default {

  LoginUser,

};