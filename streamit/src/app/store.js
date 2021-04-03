import { configureStore } from '@reduxjs/toolkit';
import posterReducer from "../features/posterSlice";

export default configureStore({
  reducer: {
    poster: posterReducer,
  },
});
