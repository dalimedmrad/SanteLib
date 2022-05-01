import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { editrdv, editrdv1 } from "../../Redux/actions/rdv";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { green } from "@material-ui/core/colors";

const Rdv = ({ rdv }) => {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    Swal.fire({
      title: "Es-tu sûr?",
      text: "Voulez-vous annuler ce rendez-vous !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(editrdv1(rdv._id, { isAnnuler: true }));
        Swal.fire("Annuler!", "Votre rendez-vous a été annulé.", "success");
      }
    });
  };
  return (
    <tr>
      <td>
        {rdv.date1.substring(0, 10)} {rdv.heure && <span>à</span>}{" "}
        <b>{rdv.heure}</b>
      </td>
      <td>{rdv.mode}</td>
      <td>{rdv.client_name}</td>
      <td>
        <Link
          style={{ textDecoration: "none" }}
          to={`/docprofile/${rdv.doc_id}`}
          // profileProps: { el: rdv },
        >
          {rdv.doc_name}
        </Link>
      </td>
      <td>{rdv.specialite}</td>
      <td>
        {rdv.isAnnuler ? (
          "Rendez-vous annulé"
        ) : (
          <>
            {rdv.approved ? "Demande acceptée" : "En attente d'acceptation"}{" "}
            {rdv.approved && <CheckCircleIcon style={{ color: green[500] }} />}
          </>
        )}
      </td>
      <td>
        {Date.parse(rdv.date1) - 2880 * 60 * 1000 > Date.now() &&
          !rdv.isAnnuler && (
            <button onClick={handleUpdate} className="btn btn-danger ">
              Annuler
            </button>
          )}
      </td>
    </tr>
  );
};

export default Rdv;
