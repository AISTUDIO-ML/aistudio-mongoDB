// import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hosting from "./components/hosting/Hosting";
import Login from "./components/login/Login";
import PricingTable from "./components/pricingTable/PricingTable";
import SignUp from "./components/signup/SignUp";
import "./components/style.css";
// import { useUserStore } from "./store/user";
import ForgotLink from "./components/forgotPassword/ForgotLink";
import ResetPassword from "./components/forgotPassword/ResetPassword";
import AuthLayout from "./components/layouts/AuthLayout";
import { DashboardLayout } from "./components/layouts/Dashboard";
import Github from "./components/socialPages/Github";
import Google from "./components/socialPages/Google";
import Microsoft from "./components/socialPages/Microsoft";
import VerifyEmail from "./components/verify/VerifyEmail";
import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  // const user = useUserStore((state: any) => state.user);

  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotLink />} />
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

        {/* Logged in Routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={
              <DashboardLayout>
                <Hosting />
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
      </Routes>
    </Router>
  );
}

export default App;
