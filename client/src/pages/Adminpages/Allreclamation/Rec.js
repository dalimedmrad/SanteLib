import React from "react";
import { useDispatch } from "react-redux";
import { deleterec } from "../../../Redux/actions/rec";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

const Rec = ({ el }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    Swal.fire({
      title: "Es-tu sûr?",
      text: "Vous allez supprimer cette reclamation !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleterec(el._id));
        Swal.fire("Supprimé!", "Cette reclamation a été supprimé.", "success");
      }
    });
  };
  return (
    <tr>
      <td>{el.client_name}</td>
      <td>{el.object}</td>
      <td>{el.message}</td>
      <td>
        <Button className="btn btn-danger" onClick={handleDelete}>
          Supprimer
        </Button>
        &nbsp;&nbsp;
        <Button href={`mailto:${el.email}`} className="btn btn-success">
          Contacter
        </Button>
      </td>
    </tr>
  );
};

export default Rec;
