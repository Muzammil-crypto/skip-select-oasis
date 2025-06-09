export const handleApiError = (error, fallbackMessage = 'An error occurred') => {
  console.error('API Error:', error);

  // Return user-friendly error message
  if (error?.type === 'NETWORK_ERROR') {
    return 'Network connection failed. Please check your internet connection.';
  }

  if (error?.message) {
    return error.message;
  }

  return fallbackMessage;
};
