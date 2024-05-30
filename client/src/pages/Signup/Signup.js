import React from "react";
import { useState, useRef } from "react";
import { loginUser, loginWithGoogle, Saveuser } from "../../Redux/actions/user";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch } from "react-redux";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Swal from "sweetalert2";
import WcIcon from "@material-ui/icons/Wc";
import GoogleLogin from "react-google-login";
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
  const [check, setCheck] = useState({
    password: false,
    phone: false,
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

  const checkpassword = () => {
    if (
      !/[a-z]/.test(patient.password) ||
      !/[0-9]/.test(patient.password) ||
      !/[A-Z]/.test(patient.password) ||
      !/[!@#$€%^&*()_+\-=[\]{};:'"\\|,.<>/?]/.test(patient.password) ||
      !(patient.password.length >= 8 && patient.password.length <= 20)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `Le mot de passe doit contenir des lettres minuscules, des lettres majuscules, des chiffres, des symboles et avoir une longueur d'au moins 8 caractères.`,
      });
    } else {
      setCheck({ ...check, password: true });
    }
  };

  const checkphone = () => {
    if (patient.phone.length !== 8) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `Vérifier votre numéro de télèphone`,
      });
    } else {
      setCheck({ ...check, phone: true });
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(Saveuser(patient, history));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(user, history));
  };
  const responseSuccessGoogle = (googleData) => {
    console.log(googleData);
    dispatch(loginWithGoogle({ token: googleData.tokenId }));
  };
  const responseErrorGoogle = (response) => { };
  return (
    <div className="LoginSignUpContainer col-md-12">
      <div className="col-md-6 row">
        <img alt="" src={process.env.PUBLIC_URL + "log.svg"} />
      </div>
      <div className="LoginSignUpBox row">
        <div>
          <div className="login_signUp_toggle">
            <p onClick={(e) => switchTabs(e, "login")}>Connexion</p>
            <p onClick={(e) => switchTabs(e, "register")}>Inscription</p>
          </div>
          <button className="button1" ref={switcherTab}></button>
        </div>
        <form className="loginForm" onSubmit={handleLogin} ref={loginTab}>
          <div>
            <MailOutlineIcon />
            <input
              type="email"
              placeholder="Adresse email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              value={user?.email.replace(/\s+/g, "")}
            />
          </div>
          <div>
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
          <GoogleLogin
            clientId="937191540494-l8r8qb5gsj5i5fs2sorskv3g7he0pn7c.apps.googleusercontent.com"
            buttonText="Se connecter avec google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
            style={{ width: "350px!important" }}
          />
        </form>
        <form
          onSubmit={handleRegister}
          className="signUpForm"
          ref={registerTab}
        >
          <div className="tobtn1">
            <Link to="/inscription/particien">
              <button className="tobtn">
                Vous êtes professionnel de santé ?
              </button>
            </Link>
          </div>

          <div>
            <WcIcon />
            <select
              required
              onChange={(e) => setPatient({ ...patient, sexe: e.target.value })}
            >
              <option value="">-- Genre ---</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
            </select>
          </div>
          <div>
            <PersonIcon />
            <input
              type="text"
              placeholder="Nom du famille"
              onChange={(e) => setPatient({ ...patient, name: e.target.value })}
              required
            />
          </div>
          <div>
            <PersonIcon />
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
          <div>
            <PhoneIcon />
            <input
              type="number"
              onChange={(e) =>
                setPatient({ ...patient, phone: e.target.value })
              }
              onBlur={checkphone}
              placeholder="Numéro de mobile"
              required
            />
          </div>
          <div>
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
          <div>
            <LockOpenIcon />
            <input
              type="password"
              placeholder="Mot de passe"
              required
              name="password"
              onChange={(e) =>
                setPatient({ ...patient, password: e.target.value })
              }
              onBlur={checkpassword}
            />
          </div>
          <div className="check">
            <input type="checkbox" id="check" required />
            <label htmlFor="check">
              J'accepte la politique de confidentialité du site
            </label>
          </div>
          <input
            type="submit"
            value="Soumettre"
            disabled={
              patient.email &&
                patient.lastName &&
                patient.name &&
                patient.sexe &&
                patient.phone &&
                patient.password &&
                check.password &&
                check.phone
                ? false
                : true
            }
            className="signUpBtn"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
