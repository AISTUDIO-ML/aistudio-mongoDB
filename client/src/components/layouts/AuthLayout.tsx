import { useUserStore } from "@/store/user";
import { Navigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  const user = useUserStore((state: any) => state.user);

  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
