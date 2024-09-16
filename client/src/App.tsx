// import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "./components/auth/Login";
import PricingTable from "./components/pricingTable/PricingTable";
// import "./components/style.css";
// import { useUserStore } from "./store/user";
import { ForgotPassword } from "./components/auth/ForgotPassword";

import { Signup } from "./components/auth/signup/Signup";
// import ResetPassword from "./components/forgotPassword/ResetPassword";
import { ResetPassword } from "./components/auth/ResetPassword";
import AuthLayout from "./components/layouts/AuthLayout";
import { DashboardLayout } from "./components/layouts/Dashboard";
import Github from "./components/socialPages/Github";
import Google from "./components/socialPages/Google";
import Microsoft from "./components/socialPages/Microsoft";
import VerifyEmail from "./components/verify/VerifyEmail";
import { Dashboard } from "./pages/Dashboard";
import { Groups } from "./pages/Groups";
import { Home } from "./pages/Home";
import { Integration } from "./pages/Integration";
import { Setting } from "./pages/Setting";
import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  // const user = useUserStore((state: any) => state.user);

  return (
    <Router>
      <Routes>
        {/* Logged in Routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={
              <DashboardLayout>
                <Home />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/group"
            element={
              <DashboardLayout>
                <Groups />
              </DashboardLayout>
            }
          />
          <Route
            path="/integration"
            element={
              <DashboardLayout>
                <Integration />
              </DashboardLayout>
            }
          />
          <Route
            path="/setting"
            element={
              <DashboardLayout>
                <Setting />
              </DashboardLayout>
            }
          />

          <Route
            path="/checkout"
            element={
              <DashboardLayout>
                <PricingTable />
              </DashboardLayout>
            }
          />
          <Route
            path="*"
            element={
              <DashboardLayout>
                <h1 className="text-center my-5">Page Not Found!</h1>
              </DashboardLayout>
            }
          />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/verify/:token" element={<VerifyEmail />} />
          <Route path="/auth/google-callback" element={<Google />} />
          <Route path="/auth/github-callback" element={<Github />} />
          <Route path="/auth/microsoft-callback" element={<Microsoft />} />

          <Route
            path="*"
            element={<h1 className="text-center my-5">Page Not Found!</h1>}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
