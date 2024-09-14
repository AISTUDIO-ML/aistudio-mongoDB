// components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/user";

import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useUserStore((state: any) => state.user);
  const token = window.localStorage.getItem("token");
  console.log({ token, user });

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
