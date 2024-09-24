import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export const apiController = new AbortController();

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_OMDB_API_URL }),
  endpoints: (builder) => ({
    searchMovies: builder.query({
      query: (searchTerm) => ({
        url: "",
        params: {
          s: searchTerm,
          apikey: API_KEY,
        },
      }),
    }),
    getMovieDetails: builder.query({
      query: (movieId) => ({
        url: "",
        params: {
          i: movieId,
          apikey: API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetMovieDetailsQuery, useLazySearchMoviesQuery } = movieApi;
