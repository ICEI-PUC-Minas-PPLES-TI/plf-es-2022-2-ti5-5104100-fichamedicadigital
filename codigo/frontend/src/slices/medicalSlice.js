import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import medicalService from "../services/medicalService";


const initialState = {
  medicalData: {},
  error: false,
  success: false,
  loading: false,
};

export const medicalRegister = createAsyncThunk(
  "auth/medicalRegister",
  async (medicalData, thunkAPI) => {
    
    const data = await medicalService.medicalRegister(medicalData);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);


export const medicalSlice = createSlice({
  name: "medical",
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
      .addCase(medicalRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(medicalRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(medicalRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { reset } = medicalSlice.actions;
export default medicalSlice.reducer;