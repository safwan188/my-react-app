
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL+'/api/expertrequests'; // Adjust to match your Express server's port and route

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
    
    
    
    const getAllExpertRequests = () => {
        return axiosInstance.get(API_URL);
    }
 
    export default {    
        getAllExpertRequests,
    };