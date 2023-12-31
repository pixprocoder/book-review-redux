import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    addBook: builder.mutation({
      query: (body) => ({
        url: `/books/create-book`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery, useAddBookMutation } = api;

// https://book-review-backend-five.vercel.app/api/v1
