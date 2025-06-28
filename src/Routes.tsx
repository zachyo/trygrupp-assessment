/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Settings from "./pages/Settings/Settings";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};
