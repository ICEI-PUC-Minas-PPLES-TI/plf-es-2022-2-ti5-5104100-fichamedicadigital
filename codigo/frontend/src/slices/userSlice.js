import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";


const initialState = {
  userData: [],
  error: false,
  success: false,
  loading: false,
};

export const userRegister = createAsyncThunk(
  "user/userRegister",
  async (userData, thunkAPI) => {
    
    const data = await userService.userRegister(userData);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);

export const userFindAll = createAsyncThunk(
    "user/userFindAll",
    async (thunkAPI) => {
        const data = await userService.userFindAll()

        if(data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }
    return data
    }
)


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userFindAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userFindAll.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userData = action.payload
      })
      .addCase(userFindAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;