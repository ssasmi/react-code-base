import React from "react";
import { useGlobalContext } from "../context/appContext";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useGlobalContext();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
export default PrivateRoute;
