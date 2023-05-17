import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IUser } from "../../../interfaces/user.interface";

export interface IAuthState {
  user: IUser | null;
  token: string | null;
}

const initialState: IAuthState = { user: null, token: null };

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: IUser }>) => {
      const { user } = action.payload;
      state.user = user;
    },
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      const { token } = action.payload;
      state.token = token;
    },
    logOut: (state, action: PayloadAction) => {
      state.user = null;
      state.token = null;
    },
  },
});

export default authSlice.reducer;

export const { logOut, setToken, setUser } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
