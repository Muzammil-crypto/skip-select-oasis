
import React from 'react';
import { useAppDispatch } from '../hooks/redux';
import { clearError, fetchSkipsAsync } from '../features/skips/skipSlice';

const ErrorMessage = ({ message }) => {
  const dispatch = useAppDispatch();

  const handleRetry = () => {
    dispatch(clearError());
    dispatch(fetchSkipsAsync());
  };

  return (
    <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-6 text-center backdrop-blur-sm">
      <div className="text-red-400 font-medium mb-2">
        Something went wrong
      </div>
      <div className="text-red-300/80 text-sm mb-4">
        {message}
      </div>
      <button
        onClick={handleRetry}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;
