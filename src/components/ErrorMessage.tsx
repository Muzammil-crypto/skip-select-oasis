
import React from 'react';
import { useAppDispatch } from '../hooks/redux';
import { clearError, fetchSkipsAsync } from '../features/skips/skipSlice';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const dispatch = useAppDispatch();

  const handleRetry = () => {
    dispatch(clearError());
    dispatch(fetchSkipsAsync());
  };

  return (
    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
      <div className="text-destructive font-medium mb-2">
        Something went wrong
      </div>
      <div className="text-destructive/80 text-sm mb-4">
        {message}
      </div>
      <button
        onClick={handleRetry}
        className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg hover:bg-destructive/90 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;
