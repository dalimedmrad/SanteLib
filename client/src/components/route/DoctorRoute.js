import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const DoctorRoute = () => {
  const isDoctor = localStorage.getItem("isDoctor");
  // if (isDoctor) {
  //     return <Route component={Component} {...rest} />;
  //   }
  //   return <Redirect path="/" />;
  return isDoctor ? <Outlet /> : <Navigate to="/" />;
};

export default DoctorRoute;
