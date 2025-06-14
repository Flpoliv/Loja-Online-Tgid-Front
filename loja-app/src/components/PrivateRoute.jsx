// src/components/PrivateRoute.jsx
import { useContext } from "react";
import { LojaContext } from "../contexts/LojaContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { usuario } = useContext(LojaContext);

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
