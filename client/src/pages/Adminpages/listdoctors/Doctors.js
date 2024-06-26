import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import ModelHors from "./modelHors/ModelHors";
import { updateAdminRole } from "../../../Redux/actions/user";
import axios from "axios";
import { getToken, sendSMS } from "../../../orangeSMS";
import { Avatar } from "@material-ui/core";
import Stas from "./Stas";

const Doctors = ({ doctor }) => {
  const dispatch = useDispatch();
  const onClick = (element) => {
    document.getElementById("img01").src = element;
    document.getElementById("modal01").style.display = "block";
    document.getElementById("modal01").style.zIndex = "999";
  };
  const onClick1 = () => {
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
  //         dispatch(deleteuser(doctor._id));
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
    const message = `Bonjour Dr ${doctor.lastName} ${doctor.name},

    Félicitations et bienvenue sur <a>SantéLib.tn</a> !

    Votre compte est désormais activé 

    `;
    const email = doctor.email;
    const data = { email, message };
    await axios.post("/api/user/sendmail", data);
  };
  const sendMail1 = async () => {
    const message = `Bonjour Dr ${doctor.lastName} ${doctor.name},
    
    Votre compte a été desactivé pour des rasions de sécurité.
    Vous pouvez m'envoyez un mail sur santelib.tn@gmail.com .

    A bientôt.
    `;
    const email = doctor.email;
    const data = { email, message };
    await axios.post("/api/user/sendmail", data);
  };
  const sendMsgp = async () => {
    const token = await getToken();
    // console.log(token)
    // const senderAdress = "+21656813222";
    const address = `+216${doctor.phone}`;
    const message = `Bonjour Dr ${doctor.name} ${doctor.lastName} votre compte a été activé`;
    await sendSMS(address, message, token);
    // console.log(res);
  };
  const sendMsgp1 = async () => {
    const token = await getToken();
    // console.log(token)
    // const senderAdress = "+21656813222";
    const address = `+216${doctor.phone1}`;
    const message = `Bonjour Dr ${doctor.name} ${doctor.lastName} votre compte a été activé`;
    await sendSMS(address, message, token);
    // console.log(res);
  };
  const sendMsg1p = async () => {
    const token = await getToken();
    // console.log(token)
    // const senderAdress = "+21656813222";
    const address = `+216${doctor.phone}`;
    const message = `Bonjour Dr ${doctor.name} ${doctor.lastName} votre compte a été désactivé pour des raison de sécurité`;
    await sendSMS(address, message, token);
    // console.log(res);
  };
  const sendMsg1p1 = async () => {
    const token = await getToken();
    // console.log(token)
    // const senderAdress = "+21656813222";
    const address = `+216${doctor.phone1}`;
    const message = `Bonjour Dr ${doctor.name} ${doctor.lastName} votre compte a été désactivé pour des raisons de sécurité`;
    await sendSMS(address, message, token);
    // console.log(res);
  };
  const handleUpdate = () => {
    Swal.fire({
      title: "Êtes-vous sûr d'activer ce compte ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui",
      cancelButtonText: "Non",
      reverseButtons: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateAdminRole(doctor._id, { isDoctor: true }));
        sendMail();
        sendMsgp();
        sendMsgp1();
        Swal.fire(
          "Ce compte a été activer",
          "Un email/SMS est envoyé à ce docteur",
          "success"
        );
      }
    });
  };
  const handleUpdate1 = () => {
    Swal.fire({
      title: "Êtes-vous sûr de désactiver ce compte ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui",
      cancelButtonText: "Non",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateAdminRole(doctor._id, { isDoctor: false }));
        sendMail1();
        sendMsg1p();
        sendMsg1p1();
        Swal.fire(
          "Ce compte a été désactiver",
          "Un mail est envoyé à cet adresse",
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

  return (
    <>
      <tr>
        <td>
          <Avatar
            src={doctor.image2}
            onClick={() => onClick(doctor.image2)}
            className="w3-hover-opacity photo"
          />
        </td>
        <td style={{ textAlign: "center" }}>
          <i
            title={doctor.sexe.toString() === "homme" ? "Homme" : "Femme"}
            style={{
              fontSize: "30px",
              textAlign: "center",
              color: `${doctor.sexe.toString() === "homme" ? "blue" : "red"}`,
            }}
            class={
              doctor.sexe.toString() === "homme"
                ? "fas fa-male"
                : "fas fa-female"
            }
          ></i>
        </td>
        <td
          style={{ textAlign: "center", fontWeight: "400", fontSize: "17px" }}
        >
          {doctor.name} {doctor.lastName}
        </td>
        <td
          style={{ textAlign: "center", fontWeight: "400", fontSize: "17px" }}
        >
          {doctor.phone}
        </td>
        <td
          style={{ textAlign: "center", fontWeight: "400", fontSize: "17px" }}
        >
          {doctor.email}
        </td>
        <td
          style={{ textAlign: "center", fontWeight: "400", fontSize: "17px" }}
        >
          {doctor.specialite}
        </td>
        <td
          style={{ textAlign: "center", fontWeight: "400", fontSize: "17px" }}
        >
          {doctor.ville}
        </td>
        <td
          style={{ textAlign: "center", fontWeight: "400", fontSize: "17px" }}
        >
          <ModelHors
            name={doctor.name}
            ls={doctor.lastName}
            phone1={doctor.phone1}
            datnaiss={doctor.datnaiss}
            duree={doctor.duree}
            hors={doctor.horaire}
            adresse={doctor.addressecab}
            doctor={doctor}
          />
        </td>
        {/* <td style={{ textAlign: "center" }}> */}
        <td style={{ textAlign: "center" }}>
          <button
            className={doctor.isDoctor ? "btn btn-danger" : "btn btn-success"}
            onClick={doctor.isDoctor ? handleUpdate1 : handleUpdate}
          >
            {doctor.isDoctor ? "Désactiver" : "Activer"}
          </button>
        </td>
        <td>
          <Stas doc={doctor} />
        </td>
      </tr>
      <div id="modal01" class="w3-modal" onClick={onClick1}>
        <span class="w3-button w3-hover-red w3-xlarge w3-display-topright">
          &times;
        </span>
        <div class="w3-modal-content w3-animate-zoom">
          <img alt="" id="img01" style={{ width: "80%", height: "80%" }} />
        </div>
      </div>
    </>
  );
};

export default Doctors;
