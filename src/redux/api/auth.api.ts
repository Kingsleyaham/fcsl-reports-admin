import { logOut } from "../features/auth/authSlice";
import { apiSlice } from "./index.api";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),

    logOut: builder.query({
      query: () => "/auth/logout",
      async onQueryStarted({ dispatch, queryFulfilled }) {
        dispatch(logOut());
        // try {
        //   const data = await queryFulfilled;
        //   // `onSuccess` side-effect
        //   dispatch(messageCreated("Posts received!"));
        // } catch (err) {
        //   // `onError` side-effect
        //   dispatch(messageCreated("Error fetching posts!"));
        // }
      },
    }),
  }),
});

export const { useLoginMutation, useLogOutQuery } = authApiSlice;
