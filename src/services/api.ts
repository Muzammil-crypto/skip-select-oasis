
import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with actual API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;
