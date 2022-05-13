import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { registerDoc } from "../../Redux/actions/user";

const VerificationEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useParams();

  const confirmEmail = (e) => {
    e.preventDefault();
    dispatch(registerDoc({ token }, navigate));
  };
  return (
    <div>
      <Button
        style={{ marginTop: "80px" }}
        align="center"
        variant="contained"
        color="primary"
        onClick={confirmEmail}
      >
        Verifier votre adresse email
      </Button>
    </div>
  );
};

export default VerificationEmail;
