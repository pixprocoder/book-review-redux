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
    deleteBook: builder.mutation({
      query(id) {
        return {
          url: `books/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useAddBookMutation,
  useDeleteBookMutation,
} = api;
