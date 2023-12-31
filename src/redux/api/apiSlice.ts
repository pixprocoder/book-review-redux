import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-review-backend-five.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery } = api;
