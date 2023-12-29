import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase.init";

type IAuthInfo = {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

const initialState: IAuthInfo = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password }: { email: string; password: string }) => {
    const data = await createUserWithEmailAndPassword(auth, email!, password!);
    return data.user.email;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

export const { login } = authSlice.actions;
export const selectUser = (state: any) => state.auth.user;

export default authSlice.reducer;
