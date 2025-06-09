import { useEffect, useCallback } from 'react';
import { fetchSkipsAsync } from '../features/skips/skipSlice';
import { useAppDispatch, useAppSelector } from './redux';

export const useSkips = () => {
  const dispatch = useAppDispatch();
  const { skips, loading, error } = useAppSelector((state) => state.skips);

  const fetchSkips = useCallback(() => {
    dispatch(fetchSkipsAsync());
  }, [dispatch]);

  // Auto-fetch on mount
  useEffect(() => {
    if (skips.length === 0) {
      fetchSkips();
    }
  }, [fetchSkips, skips.length]);
  return {
    skips,
    loading,
    error,
    fetchSkips,
  };
};
