import axios from 'axios';

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: "https://app.wewantwaste.co.uk"|| '',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add logging and performance monitoring
apiClient.interceptors.request.use(
  (config) => {
    // Add request timestamp for performance monitoring
    config.metadata = { startTime: new Date() };

    // Log request in development
    if (import.meta.env.NODE_ENV === 'development') {
      console.log(`🚀 ${config.method?.toUpperCase()} ${config.url}`);
    }

    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors and logging
apiClient.interceptors.response.use(
  (response) => {
    // Calculate request duration
    const endTime = new Date();
    const duration = endTime.getTime() - response.config.metadata.startTime.getTime();

    // Log response in development
    if (import.meta.env.NODE_ENV === 'development') {
      console.log(`${response.config.method?.toUpperCase()} ${response.config.url} (${duration}ms)`);
    }

    return response;
  },
  (error) => {
    // Handle network errors
    if (!error.response) {
      console.error('Network Error:', error.message);
      return Promise.reject({
        message: 'Network error. Please check your connection.',
        type: 'NETWORK_ERROR',
      });
    }

    // Handle different HTTP error codes
    const errorResponse = {
      status: error.response.status,
      message: error.response.data?.message || error.message,
      type: 'API_ERROR',
    };

    switch (error.response.status) {
      case 400:
        errorResponse.message = 'Bad request. Please check your input.';
        break;
      case 404:
        errorResponse.message = 'Resource not found.';
        break;
      case 429:
        errorResponse.message = 'Too many requests. Please try again later.';
        break;
      case 500:
        errorResponse.message = 'Server error. Please try again later.';
        break;
    }

    console.error('API Error:', errorResponse);
    return Promise.reject(errorResponse);
  }
);

export default apiClient;