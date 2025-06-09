import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkipsAsync } from '../features/skips/skipSlice';

export const useSkips = () => {
  const dispatch = useDispatch();
  const { skips, loading, error } = useSelector((state) => state.skips);

  const fetchSkips = useCallback(() => {
    dispatch(fetchSkipsAsync());
  }, [dispatch]);

  // Auto-fetch on mount
  useEffect(() => {
    if (skips.length === 0) {
      fetchSkips();
    }
  }, [fetchSkips, skips.length]);
  console.log('useSkips hook rendered with skips in hook:', skips);
  return {
    skips,
    loading,
    error,
    fetchSkips,
  };
};
