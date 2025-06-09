import axios from 'axios';
const apiClient = axios.create({
  baseURL: "https://app.wewantwaste.co.uk"|| '',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    config.metadata = { startTime: new Date() };

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

apiClient.interceptors.response.use(
  (response) => {
    const endTime = new Date();
    const duration = endTime.getTime() - response.config.metadata.startTime.getTime();

    if (import.meta.env.NODE_ENV === 'development') {
      console.log(`${response.config.method?.toUpperCase()} ${response.config.url} (${duration}ms)`);
    }

    return response;
  },
  (error) => {
    if (!error.response) {
      console.error('Network Error:', error.message);
      return Promise.reject({
        message: 'Network error. Please check your connection.',
        type: 'NETWORK_ERROR',
      });
    }

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