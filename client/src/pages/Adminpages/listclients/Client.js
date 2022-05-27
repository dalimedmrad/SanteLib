import React from "react";
import { updateAdminRole } from "../../../Redux/actions/user";
import { useDispatch } from "react-redux";
import "./allClients.css";
import { green } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import Swal from "sweetalert2";
import { Avatar } from "@material-ui/core";
import Stasts from "./Stasts";
import { getToken, sendSMS } from "../../../orangeSMS";
import axios from "axios";

const Client = ({ patient }) => {
  const dispatch = useDispatch();
  const onClick1 = (element) => {
    document.getElementById("img01").src = element;
    document.getElementById("img01").style.display = "flex";
    document.getElementById("img01").style.justifyContent = "center";
    document.getElementById("img01").style.alignItems = "center";
    document.getElementById("img01").style.width = "50%";
    document.getElementById("img01").style.height = "50%";
    document.getElementById("img01").style.marginLeft = "25%";
    document.getElementById("img01").style.borderRadius = "30%";
    document.getElementById("modal01").style.display = "block";
    document.getElementById("modal01").style.zIndex = "999";
    document.getElementById("modal01").style.display = "flex";
    document.getElementById("modal01").style.justifyContent = "center";
    document.getElementById("modal01").style.alignItems = "center";
    document.getElementById("modal01").style.padding = "auto";
  };
  const onClick2 = () => {
    document.getElementById("modal01").style.display = "none";
  };
  // const handleDelete = () => {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: "btn btn-success",
  //       cancelButton: "btn btn-danger",
  //     },
  //     buttonsStyling: false,
  //   });
  //   swalWithBootstrapButtons
  //     .fire({
  //       title: "Êtes-vous sûr de supprimer ce patient ?",
  //       text: "",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonText: "Oui",
  //       cancelButtonText: "Non",
  //       reverseButtons: true,
  //     })
  //     .then((result) => {
  //       if (result.isConfirmed) {
  //         dispatch(deleteuser(patient._id));
  //         swalWithBootstrapButtons.fire(
  //           "Ce patient a été supprimer",
  //           "",
  //           "success"
  //         );
  //         //   dispatch(getallclients());
  //       } else if (
  //         /* Read more about handling dismissals below */
  //         result.dismiss === Swal.DismissReason.cancel
  //       ) {
  //         swalWithBootstrapButtons.fire("Annuler ", "", "error");
  //       }
  //     });
  // };
  const sendMail = async () => {
    const message = `Bonjour Ms/Mme ${patient.lastName} ${patient.name},

    Félicitations et Bienvenue sur SanteLib.tn !
    Votre compte est désormais activé.

    Vous pouvez dès à présent prendre RDV avec votre médecin ou trouver un professionnel de santé près de chez vous.

  
    À bientôt  `;
    const email = patient.email;
    const data = { email, message };
    await axios.post("/api/user/sendmail", data);
  };
  const sendMail1 = async () => {
    const message = `Bonjour Ms/Mme ${patient.lastName} ${patient.name},
    
    Votre compte sur santeLib a été desactivé pour des rasions de sécurité.
    Vous pouvez m'envoyez un mail sur santelib.tn@gmail.com.

    À bientôt.`;
    const email = patient.email;
    const data = { email, message };
    const res = await axios.post("/api/user/sendmail", data);
  };
  const sendMsgp = async () => {
    const token = await getToken();
    // console.log(token)
    const address = `+216${patient.phone}`;
    const message = `Bonjour Ms/Mme ${patient.name} ${patient.lastName} Félicitations et Bienvenue sur SanteLib.tn !.Votre compte est désormais activé.Vous pouvez dès à présent prendre RDV avec votre médecin ou trouver un professionnel de santé près de chez vous.`;
    const res = await sendSMS(address, message, token);
    // console.log(res);
  };
  const sendMsgp1 = async () => {
    const token = await getToken();
    console.log(token);
    const address = `+216${patient.phone}`;
    const message = `Bonjour Ms/Mme ${patient.name} ${patient.lastName} Votre compte sur santeLib a été desactivé pour des raisons de sécurité.`;
    const res = await sendSMS(address, message, token);
  };
  const handleUpdate = () => {
    Swal.fire({
      title: patient.isAuth
        ? "Êtes-vous sûr de désactiver ce compte ?"
        : "Êtes-vous sûr d'activer ce compte ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui",
      cancelButtonText: "Non",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (patient.isAuth === true) {
          sendMail1();
          sendMsgp1();
        } else {
          sendMail();
          sendMsgp();
        }
        dispatch(updateAdminRole(patient._id, { isAuth: !patient.isAuth }));
        Swal.fire(
          patient.isAuth
            ? "Ce compte a été désactivé"
            : "Ce compte a été activé",
          "Un email/SMS est envoyé à ce patient",
          "success"
        );
      }
      // else if (
      //   /* Read more about handling dismissals below */
      //   result.dismiss === Swal.DismissReason.cancel
      // ) {
      //   swalWithBootstrapButtons.fire("Annuler", "", "error");
      // }
    });
  };

  const isAdmin = localStorage.getItem("isAdmin");
  return (
    <>
      <tr>
        <td>
          <Avatar
            className={
              patient.image2 && "photo01 w3-hover-opacity rounded-circle"
            }
            onClick={() => onClick1(patient.image2)}
            src={patient.image2}
          />
        </td>
        <td style={{ fontSize: "30px",fontWeight:"bold", textAlign: "center", color: `${patient.sexe.toString() === "homme" ? "blue" : "red"}` }}>
          <i
            title={patient.sexe === "homme" ? "Homme" : "Femme"}
            className={patient.sexe === "homme" ? "fas fa-male" : "fas fa-female"}
          ></i>
        </td>
        <td>
          {patient.name} {patient.lastName}
        </td>
        <td>{patient.datnaiss}</td>
        <td>{patient.phone}</td>
        <td>{patient.email}</td>
        <td>{patient.ville}</td>
        {isAdmin && (
          <>
            <td style={{ textAlign: "center" }}>
              {patient.isAuth ? (
                <CheckCircleIcon
                  titleAccess="Compte activé"
                  style={{ color: green[500], fontSize: "35px" }}
                />
              ) : (
                <NotInterestedIcon
                  titleAccess="Compte désactiver"
                  style={{ color: red[500], fontSize: "35px" }}
                />
              )}
            </td>
            {/* <td>
              <td style={{ border: "0" }}>
                <DeleteIcon
                  titleAccess="Supprimer ce patient"
                  className="dlt"
                  style={{ fontSize: "30px" }}
                  onClick={handleDelete}
                />
              </td> */}
            <td>
              {/* <i
                title={
                  patient.isAuth ? "Désactiver ce compte" : "Activer ce compte"
                }
                style={{ fontSize: "25px" }}
                className="fas fa-user-edit dlt1"
                onClick={() => handleUpdate()}
              ></i> */}
              <button
                onClick={handleUpdate}
                className={
                  patient.isAuth ? "btn btn-danger" : "btn btn-success"
                }
              >
                {patient.isAuth ? "Désactiver" : "Activer"}
              </button>
            </td>
            {/* </td> */}
            <td>
              <Stasts patient={patient} />
            </td>
          </>
        )}
      </tr>
      <div id="modal01" class="w3-modal" onClick={onClick2}>
        <span class="w3-button w3-hover-red w3-xlarge w3-display-topright">
          &times;
        </span>
        <div class="w3-modal-content w3-animate-zoom">
          <img id="img01" />
        </div>
      </div>
    </>
  );
};

export default Client;
