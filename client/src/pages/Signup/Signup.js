import React from "react";
import { useState, useRef } from "react";
import { loginUser, registerUser } from "../../Redux/actions/user";
import {Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import { useDispatch } from "react-redux";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Swal from "sweetalert2";
// import { clearErrors, login, register } from "../../actions/userAction";
// import { useAlert } from "react-alert";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";

const Signup = () => {
  const [patient, setPatient] = useState({
    name: "",
    lastName: "",
    sexe: "",
    password: "",
    phone: "",
    email: "",
    role: "patient",
    isAuth: true,
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useNavigate();
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);
  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const reqs = document.getElementById("check");
    if (
      reqs.checked &&
      patient.name &&
      patient.lastName &&
      patient.email &&
      patient.password &&
      patient.phone &&
      patient.sexe
    ) {
      dispatch(registerUser(patient, history));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "SVP !, veuillez remplir tous les champs.",
      });
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // if (user.email && user.password) {
    dispatch(loginUser(user, history));
    // } else {
    // Swal.fire({
    //   icon: "error",
    //   title: "Oops...",
    //   text: "SVP veuillez remplir tous les champs !",
    // });
    // }
  };
  return (
    <div className="LoginSignUpContainer col-md-12">
      <div className="col-md-6 row">
        <img src={process.env.PUBLIC_URL + "log.svg"} />
      </div>
      <div className="LoginSignUpBox row">
        <div>
          <div className="login_signUp_toggle">
            <p onClick={(e) => switchTabs(e, "login")}>Connexion</p>
            <p onClick={(e) => switchTabs(e, "register")}>Inscription</p>
          </div>
          <button className="button1" ref={switcherTab}></button>
        </div>
        <form
          className="loginForm"
          onSubmit={(e) => handleLogin(e)}
          ref={loginTab}
        >
          <div className="inpts1">
            <MailOutlineIcon />
            <input
              type="email"
              placeholder="Adresse email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              value={user?.email.replace(/\s+/g, "")}
            />
          </div>
          <div className="inpts1">
            <LockOpenIcon />
            <input
              type="password"
              placeholder="Mot de passe"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
          <input
            type="submit"
            value="Se connecter"
            className="loginBtn"
            disabled={user ? false : true}
          />
          <Link to="/motdepasseoublier" style={{ fontSize: "15px" }}>
            Vous avez oublier votre mot de passe ?
          </Link>
        </form>
        <form
          onSubmit={handleRegister}
          className="signUpForm"
          ref={registerTab}
        >
          <Link to="/inscription/particien">
            <div className="tobtn1">
              <button className="tobtn">
                Vous êtes professionnel de santé ?
              </button>
            </div>
          </Link>
          <div className="inpts1">
            <select
              required={true}
              onChange={(e) => setPatient({ ...patient, sexe: e.target.value })}
            >
              <option className="option">-- Genre ---</option>
              <option className="option" value="homme">
                Homme
              </option>
              <option className="option" value="femme">
                Femme
              </option>
            </select>
          </div>
          <div className="inpts1">
            <FaceIcon />
            <input
              type="text"
              placeholder="Nom du famille"
              onChange={(e) => setPatient({ ...patient, name: e.target.value })}
              required
            />
          </div>
          <div className="inpts1">
            <FaceIcon />
            <input
              type="text"
              placeholder="Prénom"
              onChange={(e) =>
                setPatient({ ...patient, lastName: e.target.value })
              }
              required
              name="name"
            />
          </div>
          <div className="inpts1">
            <PhoneIcon />
            <input
              type="number"
              onChange={(e) =>
                setPatient({ ...patient, phone: e.target.value })
              }
              minLength={8}
              maxLength={8}
              placeholder="Numéro de mobile"
              required
            />
          </div>
          <div className="inpts1">
            <EmailIcon />
            <input
              type="email"
              placeholder="Adresse email"
              required
              name="email"
              onChange={(e) =>
                setPatient({ ...patient, email: e.target.value })
              }
            />
          </div>
          <div className="inpts1">
            <LockOpenIcon />
            <input
              type="password"
              placeholder="Mot de passe"
              required
              name="password"
              onChange={(e) =>
                setPatient({ ...patient, password: e.target.value })
              }
            />
          </div>
          <div className="check">
            <input
              type="checkbox"
              // onChange={(e) =>
              //   setPatient({ ...patient, check: e.target.value })
              // }
              id="check"
              required
            />
            <label htmlFor="check">
              J'accepte la politique de confidentialité du site
            </label>
          </div>
          <input type="submit" value="Soumettre" className="signUpBtn" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
