import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await axios.get("/api/v1/get/movies", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response.data: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
});

const moviesSlice = createSlice({
  name: "moviesData",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectMovies = (state) => state.moviesData;
export default moviesSlice;
