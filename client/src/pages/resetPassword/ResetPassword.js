import React, { useState } from "react";
import "./ResetPassword.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../Redux/actions/user";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const params = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(resetPassword(params.token, myForm, history));
  };

  return (
    <div className="resetPasswordContainer">
      <div className="resetPasswordBox">
        <h2 className="resetPasswordHeading">Modifier mon mot de passe</h2>

        <form className="resetPasswordForm" onSubmit={resetPasswordSubmit}>
          <div>
            <LockOpenIcon />
            <input
              type="password"
              placeholder="Nouveau mot de passe"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <LockIcon />
            <input
              type="password"
              placeholder="Confirmez le mot de passe"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Modifier"
            className="btn-success rounded-pill resetPasswordBtn"
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
