import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./movieSlice";
import userReducer from "./userSlice";
const rootReducer = {
  user: userReducer,
  movies: movieListReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
