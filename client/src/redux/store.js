import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./reducers/moviesReducer";

export const store = configureStore({
  reducer: {
    moviesData: moviesSlice.reducer,
  },
});
