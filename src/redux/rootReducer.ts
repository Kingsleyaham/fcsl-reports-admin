import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./api/index.api";
import authReducer from "./features/auth/authSlice";
import reportReducer from "./features/report/reportSlice";

export default combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  report: reportReducer,
});
