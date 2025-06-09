
import { configureStore } from '@reduxjs/toolkit';
import skipReducer from '../features/skips/skipSlice';

export const store = configureStore({
  reducer: {
    skips: skipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
