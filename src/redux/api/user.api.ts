import { apiSlice } from "./index.api";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      keepUnusedDataFor: 60,
    }),
  }),
});

export const {useGetUserQuery} = userApiSlice;
