import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import DashBoard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Layout from "./components/form/Layout";
import RequireAuth from "./middleware/requireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* protected routes */}
        <Route path="/" element={<RequireAuth />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
