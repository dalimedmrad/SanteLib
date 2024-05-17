import React, { Fragment, useState } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../Redux/actions/user";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("email", email);
    dispatch(forgotPassword(myForm, history));
  };
  return (
    <Fragment>
      <div className="forgotPasswordContainer">
        <div className="forgotPasswordBox">
          <h2 className="forgotPasswordHeading">Mot de passe oublié</h2>
          <form className="forgotPasswordForm" onSubmit={forgotPasswordSubmit}>
            <div className="forgotPasswordEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Addresse email"
                required
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Envoyer"
              className="btn btn-primary"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
