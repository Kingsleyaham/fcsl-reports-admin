import { apiSlice } from "./index.api";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
    updateUser: builder.mutation<any, any>({
      query: ({ userId, data }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: data,
      }),
    }),
    updatePassword: builder.mutation<any, any>({
      query: (data) => ({
        url: `/users/update/password`,
        method: "PUT",
        body: data,
      }),
    }),
    uploadAvatar: builder.mutation<{}, FormData>({
      query: (data) => ({
        url: `/users/avatar/upload`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdatePasswordMutation,
  useUpdateUserMutation,
  useUploadAvatarMutation,
} = userApiSlice;
