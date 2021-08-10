import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../services/movieApi";

export const fetchMovieLists = createAsyncThunk(
  "movies/movieList",
  async (params, thunkAPI) => {
    const listMoive = await movieApi.fetchMovieList();
    return listMoive.data;
  }
);

export const fetchDetailMovie = createAsyncThunk(
  "movies/detail",
  async (movieId, thunkAPI) => {
    const movie = await movieApi.fetchMovieDetail(movieId);
    return movie.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieDetail: null,
    movieList: null,
    movieUpComing: null,
    chairListSelected: [],
    bookingListChair: null,
    loading: false,
  },
  reducers: {
    removeDetailMovie: (state, action) => {
      state.movieDetail = null;
    },
    selectedChair: (state, action) => {
      let chairListSelectedUpdate = [...state.chairListSelected];
      let index = chairListSelectedUpdate.findIndex(
        (chairSelected) => chairSelected.stt === action.payload.stt
      );
      if (index !== -1) {
        chairListSelectedUpdate.splice(index, 1);
      } else {
        chairListSelectedUpdate.push(action.payload);
      }
      state.chairListSelected = chairListSelectedUpdate;
    },
  },
  extraReducers: {
    [fetchMovieLists.fulfilled]: (state, action) => {
      state.movieList = action.payload;
      state.loading = false;
    },
    [fetchMovieLists.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchDetailMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchDetailMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.movieDetail = action.payload;
    },
  },
});

const { reducer: movieListReducer, actions } = movieSlice;
export const { removeDetailMovie, selectedChair } = actions;
export default movieListReducer;
