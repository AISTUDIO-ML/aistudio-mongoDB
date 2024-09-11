import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/style.css";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Hosting from "./components/hosting/Hosting";
import PricingTable from "./components/pricingTable/PricingTable";
import { useUserStore } from "./store/user";
import ForgotLink from "./components/forgotPassword/ForgotLink";
import ResetPassword from "./components/forgotPassword/ResetPassword";
import Google from "./components/socialPages/Google";
import Github from "./components/socialPages/Github";
import Microsoft from "./components/socialPages/Microsoft";
import VerifyEmail from "./components/verify/VerifyEmail";
import AuthLayout from "./components/layouts/AuthLayout";
import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  const user = useUserStore((state: any) => state.user);

  return (
    <div className="container">
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
            <Route path="/" element={<Hosting />} />

            <Route path="/checkout" element={<PricingTable />} />
            <Route
              path="*"
              element={<h1 className="text-center my-5">Page Not Found!</h1>}
            />
          </Route>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
