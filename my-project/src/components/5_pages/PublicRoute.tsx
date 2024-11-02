import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: ReactNode;
}

export default function PublicRoute({ children }: PublicRouteProps) {
  const isAuthenticated = sessionStorage.getItem("token") !== null;

  if (isAuthenticated) {
    return <Navigate to={"/home"} replace />;
  }
  return children;
}
