import React from "react";
import "./Card.css";

const Cards = () => {
  return (
    <div className="container1">
      <div className="card1">
        <div className="card-header">
          <img
            src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
            alt="user"
          />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">Medecin d'urgence</span>
          <h4>
            Les services du SanteLib.tn me rendent énormément service au
            quotidien, cela me fait gagner un temps considérable sur mes
            consultations.
          </h4>

          <div className="user">
            <img
              src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
              alt="user"
            />
            <div className="user-info">
              <h5>July Dec</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="card-header">
          <img
            src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
            alt="user"
          />
        </div>
        <div className="card-body">
          <span className="tag tag-purple">Dentiste</span>
          <h4>
            Grâce à Allodocteur, j'optimise mon temps : mes patients indiquent
            leurs informations et me permettent ainsi de préparer le déroulement
            de la consultation.
          </h4>

          <div className="user">
            <img
              src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
              alt="user"
            />
            <div className="user-info">
              <h5>Eyup Ucmaz</h5>
              <small>Yesterday</small>
            </div>
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="card-header">
          <img
            src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
            alt="user"
          />
        </div>
        <div className="card-body">
          <span className="tag tag-pink">Pschiatre</span>
          <h4>
            Dès que ma secrétaire ajoute un rendez-vous, je reçois une
            notification sur mon mobile. Aujourd'hui, j'aurais du mal à me
            passer d'Allodocteur.
          </h4>
          
          <div className="user">
            <img
              src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
              alt="user"
            />
            <div className="user-info">
              <h5>Carrie Brewer</h5>
              <small>1w ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
