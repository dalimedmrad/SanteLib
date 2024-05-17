import { Avatar } from "@material-ui/core";
import React from "react";

const Patient = ({ patient }) => {
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
        <td style={{ fontSize: "24px"}}>
          <i
            title={patient.sexe === "homme" ? "Homme" : "Femme"}
            // style={{ fontSize: "24px", textAlign: "center" }}
            className={patient.sexe === "homme" ? "fas fa-male" : "fas fa-female"}
          ></i>
        </td>
        <td>{patient.name}</td>
        <td>{patient.lastName}</td>
        <td>{patient.datnaiss}</td>
        <td>{patient.phone}</td>
        <td>{patient.email}</td>
        <td>{patient.ville}</td>
      </tr>
      <div id="modal01" class="w3-modal" onClick={onClick2}>
        <span class="w3-button w3-hover-red w3-xlarge w3-display-topright">
          &times;
        </span>
        <div class="w3-modal-content w3-animate-zoom">
          <img id="img01" alt="" />
        </div>
      </div>
    </>
  );
};

export default Patient;
