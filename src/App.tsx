import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import DashBoard from "./pages/dashboard";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import RequireAuth from "./middleware/requireAuth";
import { useAppSelector } from "./redux/hooks";
import { selectCurrentToken } from "./redux/features/auth/authSlice";
import MonthlyReports from "./pages/dashboard/reports/MonthlyReports";
import WeeklyReports from "./pages/dashboard/reports/WeeklyReports";
import DailyReports from "./pages/dashboard/reports/DailyReports";
import CreatReport from "./pages/dashboard/reports/CreateReport";

function App() {
  const token = useAppSelector(selectCurrentToken);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={token ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* protected routes */}
        <Route path="/" element={<RequireAuth />}>
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/report/new" element={<CreatReport />} />
            <Route path="/dashboard/reports/monthly" element={<MonthlyReports />} />
            <Route path="/dashboard/reports/weekly" element={<WeeklyReports />} />
            <Route path="/dashboard/reports/daily" element={<DailyReports />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
