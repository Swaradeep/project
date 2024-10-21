import React from "react";
import Navigator from "../navigator/Navigation";

const { Outlet, Navigate } = require("react-router-dom");

const AuthProvider = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return (
    <Navigator>
      <Outlet />
    </Navigator>
  );
};

export default AuthProvider;
