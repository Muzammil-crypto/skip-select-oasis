
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSkips, Skip } from '../../services/skipService';

export interface SkipState {
  skips: Skip[];
  selectedSkipId: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: SkipState = {
  skips: [],
  selectedSkipId: null,
  loading: false,
  error: null,
};

// Async thunk for fetching skips
export const fetchSkipsAsync = createAsyncThunk(
  'skips/fetchSkips',
  async () => {
    const response = await fetchSkips();
    return response;
  }
);

const skipSlice = createSlice({
  name: 'skips',
  initialState,
  reducers: {
    selectSkip: (state, action) => {
      state.selectedSkipId = action.payload;
    },
    clearSelection: (state) => {
      state.selectedSkipId = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkipsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkipsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.skips = action.payload;
      })
      .addCase(fetchSkipsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch skips';
      });
  },
});

export const { selectSkip, clearSelection, clearError } = skipSlice.actions;
export default skipSlice.reducer;
