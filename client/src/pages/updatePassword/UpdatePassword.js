import React, { useState } from "react";
import "./UpdatePassword.css";
import { useDispatch, useSelector } from "react-redux";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../../Redux/actions/user";
import Swal from "sweetalert2";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.userReducer.result);
  const history = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isAdmin = localStorage.getItem("isAdmin");
  const isDoctor = localStorage.getItem("isDoctor");
  const [check, setCheck] = useState({
    password: false,
    pass: false,
  });
  const updatePasswordSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);
    myForm.set("id", current._id);

    dispatch(updatePassword(myForm, history));
  };
  const checkpassword = () => {
    if (
      !/[a-z]/.test(newPassword) ||
      !/[0-9]/.test(newPassword) ||
      !/[A-Z]/.test(newPassword) ||
      !/[!@#$€%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword) ||
      !newPassword.length >= 8
    ) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `Mot de pase doit contenir des lettres miniscules,des lettres majuscules,des chiffres,des symboles et de longueur au minimum 8 caractères`,
      });
    } else {
      setCheck({ ...check, password: true });
    }
  };
  // const checkpassword1 = () => {
  //   if (confirmPassword != newPassword) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oups...",
  //       text: `Mot de pase doit contenir des lettres miniscules,des lettres majuscules,des chiffres,des symboles et de longueur au minimum 8 caractères`,
  //     });
  //   } else {
  //     setCheck({ ...check, password: true });
  //   }
  // };
  return (
    <div
      className={
        isAdmin || isDoctor
          ? "updatePasswordContainer1"
          : "updatePasswordContainer"
      }
    >
      <div className="updatePasswordBox">
        <h2 className="updatePasswordHeading">Modifier mon mot de passe</h2>

        <form className="updatePasswordForm" onSubmit={updatePasswordSubmit}>
          <div className="loginPassword">
            <VpnKeyIcon />
            <input
              type="password"
              placeholder="Ancien mot de passe"
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="loginPassword">
            <LockOpenIcon />
            <input
              type="password"
              placeholder="Nouveau mot de passe"
              required
              onBlur={checkpassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="loginPassword">
            <LockIcon />
            <input
              type="password"
              placeholder="Confimer mot de passe"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input
            disabled={
              oldPassword && newPassword && confirmPassword && check.password
                ? false
                : true
            }
            type="submit"
            value="Modifier"
            className="btn btn-success"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
