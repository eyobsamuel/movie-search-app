import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./movie-api-slice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
