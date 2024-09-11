// components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/user";

import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useUserStore((state: any) => state.user);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
