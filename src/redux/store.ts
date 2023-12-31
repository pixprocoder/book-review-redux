import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import searchReducer from "./features/searchSlice";
import { api } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
