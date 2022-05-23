import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { registerDoc } from "../../Redux/actions/user";
import "./SignUpDoc.css";

const VerificationEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useParams();

  const confirmEmail = (e) => {
    e.preventDefault();
    dispatch(registerDoc({ token }, navigate));
  };
  return (
    <div className="verific">
      <div className="verific1">
        <button className="btnverifc" onClick={confirmEmail}>
          Verifier votre adresse e-mail
        </button>
      </div>
    </div>
  );
};

export default VerificationEmail;
