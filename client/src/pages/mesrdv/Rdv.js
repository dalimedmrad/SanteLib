import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { editrdv1 } from "../../Redux/actions/rdv";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { green, red } from "@material-ui/core/colors";
import CancelIcon from '@material-ui/icons/Cancel';

const Rdv = ({ rdv }) => {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    Swal.fire({
      title: "Es-tu sûr?",
      text: "Voulez-vous annuler ce rendez-vous !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008F7A",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
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
        {rdv?.date1.substring(0, 10)} {rdv.heure && <span>à</span>}{" "}
        <b>{rdv.heure}</b>
      </td>
      <td>{rdv.mode}</td>
      <td>{rdv.client_name}</td>
      <td>{rdv.phone}</td>
      <td>
        <Link
          style={{ textDecoration: "none" }}
          to={`/docprofile/${rdv.doc_id}`}
        >
          {rdv.doc_name}
        </Link>
      </td>
      <td>{rdv.specialite}</td>
      {rdv.isRefuser ? (
        <>
          <td>Demande refusé <CancelIcon style={{ color: red[500] }} /></td>
          <td></td>
        </>
      ) : (
        <>
          <td>
            {rdv.isAnnuler && !rdv.isRefuser ? (
              "Rendez-vous annulé"
            ) : (
              <>
                {rdv.approved && !rdv.isRefuser
                  ? "Demande acceptée"
                  : "En attente d'acceptation"}{" "}
                {rdv.approved && !rdv.isRefuser && (
                  <AssignmentTurnedInIcon style={{ color: green[500] }} />
                )}
              </>
            )}
          </td>
          <td>
            {Date.parse(new Date(rdv.date1)) - 2880 * 60 * 1000 > Date.now() &&
              !rdv.isAnnuler &&
              !rdv.isRefuser && (
                <button onClick={handleUpdate} className="btn btn-danger ">
                  Annuler
                </button>
              )}
          </td>
        </>
      )}
    </tr>
  );
};

export default Rdv;
