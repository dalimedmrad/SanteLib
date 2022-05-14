import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { registerUser } from "../../Redux/actions/user";
import "./Signup.css";

const ActiveAccount = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { token } = useParams();
  // console.log(token);

  const confirmEmail = (e) => {
    e.preventDefault();
    dispatch(registerUser({ token }, history));
  };

  return (
    <div className="verific">
      <div className="verific1">
        <button className="btnverifc" onClick={confirmEmail}>
          Activez votre compte
        </button>
      </div>
    </div>
  );
};

export default ActiveAccount;
