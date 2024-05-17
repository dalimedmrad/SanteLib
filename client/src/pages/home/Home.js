import React from "react";
import { useSelector } from "react-redux";
import "./home.css";
import Loader from "../../components/Loader/Loader";

import Home1 from "./Home1";
import Home2 from "./Home2";

const Home = () => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.userReducer.result);
  return (
    <div className="backApp">
      {token ? <>{user ? <Home1 /> : <Loader />}</> : <Home2 />}
    </div>
  );
};

export default Home;
