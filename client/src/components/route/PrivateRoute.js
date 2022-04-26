import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/" />;
  // if (isAuth) {
  //    return  <Route component={Component} {...rest}/>
  // }
  // return <Redirect path='/'/>
};

export default PrivateRoute;
