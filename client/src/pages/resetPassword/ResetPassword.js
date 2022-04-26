import React, { Fragment, useState} from "react";
import "./ResetPassword.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../Redux/actions/user";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(resetPassword(params.token, myForm));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Votre mot de passe a été modifié',
      showConfirmButton: false,
      timer: 1500
    });
    
  };


  return (
    <Fragment>
      <div className="resetPasswordContainer">
        <div className="resetPasswordBox">
          <h2 className="resetPasswordHeading">Modifier mon mot de passe</h2>

          <form className="resetPasswordForm" onSubmit={resetPasswordSubmit}>
            <div>
              <LockOpenIcon />
              <input
                type="password"
                placeholder="New Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <LockIcon />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Update" className="resetPasswordBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
