import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import DashBoard from "./pages/dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
