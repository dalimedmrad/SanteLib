import React from "react";
import { Offcanvas } from "react-bootstrap";

export default function Menu({ show, handleClose }) {
  return (
    <>
      <Offcanvas
        style={{ window: "1" }}
        show={show}
        onHide={handleClose}
        scroll="true"
        backdrop="true"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "22px",
              paddingLeft: "80px",
            }}
          >
            Qui sommes nous ?
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3
            style={{
              color: "#0096D6",
              fontWeight: "bold",
              paddingBottom: "15px",
            }}
          >
            Pour les patients
          </h3>
          <p>
            <strong>SanteLib.tn</strong> est une plateforme innovante qui vous
            permet de trouver rapidement un médecin le plus proche de chez vous
            et de prendre rendez-vous en ligne gratuitement. <br />
            <br />
            <strong>SanteLib.tn</strong> vous permet de poser vos questions en
            ligne directement aux médecins en respectant les termes de
            confidentialité.
            <br />
            <br /> <strong>SanteLib.tn</strong> est le Moteur de recherche pour
            trouver une pharmacie à proximité.
            <br />
            <br /> <strong>SanteLib.tn</strong> c’est la base de données de la
            majorité des médicaments avec prix et indications. <br />
            <br />
            <strong>SanteLib.tn</strong> vous donne l’information sur les
            symptômes de maladie les plus courants.
          </p>{" "}
          <h3
            style={{
              color: "#0096D6",
              fontWeight: "bold",
              paddingBottom: "15px",
              paddingTop: "15px",
            }}
          >
            Pour les professionnels de santé
          </h3>
          <p>
            <strong>SanteLib.tn</strong> est un service complet de gestion de
            cabinet médical, qui optimise votre organisation et vous fait gagner
            du temps. Avec SanteLib.tn, vous partagez vos disponibilités en
            temps réel avec vos patients selon vos critères, tout en gardant la
            main sur votre agenda médical. <br />
            <br />
            <strong>SanteLib.tn</strong> vous permet d’entrer en contact
            directement avec des patients et de répondre à leurs interrogations.
            <br />
            <br /> Notre objectif final est d'améliorer l'accès aux soins en
            mettant à votre disposition des outils simples et intuitifs pour que
            chacun devienne acteur de sa santé et de son bien-être.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
