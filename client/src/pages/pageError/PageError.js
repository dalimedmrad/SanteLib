import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const PageError = () => {
  return (
    <div className="errrr">
      <section>
        <div className="container my-5 py-5">
          <div className="row col-md-12">
            <div className="col-md-6 ">
              <h3 className="fs-2">
                <b>Page</b>
              </h3>
              <h1 className="display-4">
                <b>Pas trouvé</b>
              </h1>
              <hr />
              <p className="lead mb-5 sze">
                Désolé mais cette page n'existe pas, veuillez appuyer sur ce
                bouton pour revenir à la page d'accueil.
                <br /> <b>Merci</b>
              </p>
              <Button variant="info" className="" href="/">
                Retourner
              </Button>
            </div>
            <div className="col-md-6">
              <img src="/errorimg.jpeg"  className="w-75 m-5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageError;
