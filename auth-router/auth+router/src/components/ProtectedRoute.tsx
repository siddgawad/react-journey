import React from "react";
import { useAuth } from "../context/useAuth";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { username } = useAuth();

  return <>{username ? children : <Navigate to="/" />}</>;
};
