import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IReportProps } from "../../../interfaces/report.interface";

type ReportState = {
  dailyReport: Array<IReportProps>;
  weeklyReport: Array<IReportProps>;
  monthlyReport: Array<IReportProps>;
};

const initialState: ReportState = {
  dailyReport: [],
  weeklyReport: [],
  monthlyReport: [],
};

const reportSlice = createSlice({
  name: "reportSlice",
  initialState,
  reducers: {
    setDailyReport: (state, action: PayloadAction<{ reports: Array<IReportProps> }>) => {
      const { reports } = action.payload;
      state.dailyReport = reports;
    },
    setWeeklyReport: (state, action: PayloadAction<{ reports: Array<IReportProps> }>) => {
      const { reports } = action.payload;
      state.weeklyReport = reports;
    },
    setMonthlyReport: (state, action: PayloadAction<{ reports: Array<IReportProps> }>) => {
      const { reports } = action.payload;
      state.monthlyReport = reports;
    },
  },
});

export default reportSlice.reducer;

export const { setDailyReport, setMonthlyReport, setWeeklyReport } = reportSlice.actions;

export const selectDailyReport = (state: RootState) => state.report.dailyReport;
export const selectWeeklyReport = (state: RootState) => state.report.weeklyReport;
export const selectMonthlyReport = (state: RootState) => state.report.monthlyReport;
