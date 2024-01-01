import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
  }),
  tagTypes: ["review", "create-book", "delete-book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
      providesTags: ["create-book"],
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["review", "delete-book"],
    }),
    addBook: builder.mutation({
      query: (body) => ({
        url: `/books/create-book`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["create-book"],
    }),

    // Review Post
    addReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/post-review/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),

    deleteBook: builder.mutation({
      query(id) {
        return {
          url: `books/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["delete-book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useAddReviewMutation,
} = api;
