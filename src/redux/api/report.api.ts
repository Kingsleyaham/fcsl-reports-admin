import { apiSlice } from "./index.api";

export const reportApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReports: builder.query({
      query: () => `/reports`,
    }),
    getReportsByYear: builder.query({
      query: (year) => `/reports/${year}`,
    }),
    getDailyReports: builder.query<any, void>({
      query: () => "/reports/daily",
    }),
    getMonthlyReports: builder.query<any, void>({
      query: () => "/reports/monthly",
    }),
    getWeeklyReports: builder.query<any, void>({
      query: () => "/reports/weekly",
    }),
    saveReport: builder.mutation<{}, FormData>({
      query: (data) => ({
        url: "/reports",
        method: "POST",
        body: data,
      }),
    }),
    deleteReport: builder.mutation({
      query: (id) => ({
        url: `/reports/${id}`,
        method: "DELETE",
      }),
    }),
    deleteSelectedReport: builder.mutation({
      query: (type) => ({
        url: `/reports/delete/${type}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetReportsQuery,
  useDeleteReportMutation,
  useSaveReportMutation,
  useGetDailyReportsQuery,
  useGetMonthlyReportsQuery,
  useGetReportsByYearQuery,
  useGetWeeklyReportsQuery,
  useDeleteSelectedReportMutation,
} = reportApiSlice;
