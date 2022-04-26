import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute1 = () => {
  const isAuth = localStorage.getItem("token");
  const isDoctor = localStorage.getItem("isDoctor");
  const isAdmin = localStorage.getItem("isAdmin");

  // if (!isAuth) {
  //   return <Route component={Component} {...rest} />;
  // }
  // return <Redirect path="/" />;
  // return !isAuth ? <Outlet /> : isAdmin? <Navigate to={"/"} />;
  if (!isAuth) {
    return <Outlet />;
  } else {
    if (isDoctor) {
      return <Navigate to={"/docteur/acceuil"} />;
    }
    if (isAdmin) {
      return <Navigate to={"/admin/acceuil"} />;
    } else {
      return <Navigate to={"/"} />;
    }
  }
};

export default PrivateRoute1;
