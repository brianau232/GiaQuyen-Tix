import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../services/userApi";

export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  const currentUser = await userApi.signIn(user);
  return currentUser;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    credential: {},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [login.fulfilled]: (state, action) => {
      state.credential = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: userReducer } = userSlice;

export default userReducer;
