import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import consultService from "../services/consultService";


const initialState = {
  consultData: {},
  error: false,
  success: false,
  loading: false,
};

export const consultRegister = createAsyncThunk(
  "auth/consultRegister",
  async (consultData, thunkAPI) => {
    
    const data = await consultService.consultRegister(consultData);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);


export const consultSlice = createSlice({
  name: "consult",
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
      .addCase(consultSlice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(consultSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(consultSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { reset } = consultSlice.actions;
export default consultSlice.reducer;