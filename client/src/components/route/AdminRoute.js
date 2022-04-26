import React from "react";
import { Navigate, Outlet} from "react-router-dom";

const AdminRoute = () => {
  const isAdmin = localStorage.getItem("isAdmin");

  //   if (isAdmin) {
  //     return <Route component={Component} {...rest} />;
  //   }

  // return <Redirect path="/" />;
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
