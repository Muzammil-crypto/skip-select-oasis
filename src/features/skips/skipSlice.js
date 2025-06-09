import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { skipService } from "../../services/skipService";
import { handleApiError } from "../../utils/error-handler";

const initialState = {
  skips: [],
  selectedSkipId: null,
  loading: false,
  error: null,
};

// Fetch skips async thunk
export const fetchSkipsAsync = createAsyncThunk(
  "skips/fetchSkips",
  async (_, { rejectWithValue }) => {
    try {
      const response = await skipService.getSkips();
      return {
        data: response,
      };
    } catch (error) {
      const message = handleApiError(error);

      return rejectWithValue(message);
    }
  }
);

// Fetch single skip by ID
export const fetchSkipByIdAsync = createAsyncThunk(
  "skips/fetchSkipById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await skipService.getSkipById(id);
      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.message || "Failed to fetch skip",
        type: error.type || "UNKNOWN_ERROR",
      });
    }
  }
);

const skipSlice = createSlice({
  name: "skips",
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
      // Fetch skips
      .addCase(fetchSkipsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkipsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.skips = action.payload.data;
        state.error = null;
      })
      .addCase(fetchSkipsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch skip by ID
      .addCase(fetchSkipByIdAsync.fulfilled, (state, action) => {
        const existingIndex = state.skips.findIndex(
          (skip) => skip.id === action.payload.id
        );
        if (existingIndex >= 0) {
          state.skips[existingIndex] = action.payload;
        } else {
          state.skips.push(action.payload);
        }
      });
  },
});

export const { selectSkip, clearSelection, clearError } = skipSlice.actions;

export default skipSlice.reducer;
