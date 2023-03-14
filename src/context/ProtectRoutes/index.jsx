import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({loggedIn, redirectTo = "/", children}) => {
  console.log(loggedIn)
  if (!loggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};