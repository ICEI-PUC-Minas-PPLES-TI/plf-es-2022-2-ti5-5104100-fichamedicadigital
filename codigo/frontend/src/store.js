import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import medicalReducer from './slices/medicalSlice';
import consultReducer from './slices/consultSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    medical: medicalReducer,
    consult: consultReducer
  },
});