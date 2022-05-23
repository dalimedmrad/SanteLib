import React from "react";
import "./Footer.css";

const Footer = () => {
  const isDoctor = localStorage.getItem("isDoctor");
  const isAdmin = localStorage.getItem("isAdmin");

  return (
    <footer className={isAdmin || isDoctor ? "fooAdmin" : "fooalluser"}>
      <div class="carda">
        <div class="row">
          <div class="col-md-12 col-sm-11 col-xs-11">
            <div class="footer-text">
              <div class="d-flex">
                <h1 style={{ color: "black",fontWeight:"bold", marginBottom: "24px" }}>
                  À propos de SantéLib
                </h1>
              </div>
              <p className="card-text">
                SantéLib s’est donné pour mission de faciliter l’accès aux soins
                des patients.
                <br />
                Pour délivrer l’information la plus complète qui soit, nous
                proposons sur notre site l’annuaire public des professions
                médicales et paramédicales référencées sur les sites officiels.
                <br /> SantéLib n'utilise pas vos données médicales à des fins
                autres que la prise de rendez-vous et celles-ci ne sont pas
                réutilisées dans le cadre d’autres projets.
              </p>
              <div className="social mt-3 mb-3">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
          {/* <div className="col-md-2 col-sm-1 col-xs-1 mb-2"></div> */}
          {/* <div class="col-md-2 col-sm-4 col-xs-4">
            <h5 class="heading">Services</h5>
            <ul>
              <li>Book services</li>
              <li>Book rental</li>
              <li>7 days available</li>
              <li>Research</li>
            </ul>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-4">
            <h5 class="heading">Building</h5>
            <ul class="card-text">
              <li>Open space</li>
              <li>Smart Office</li>
              <li>quiet </li>
            </ul>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-4">
            <h5 class="heading">Society</h5>
            <ul class="card-text">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Join Us</li>
            </ul>
          </div> */}
        </div>
        <div class="divider mb-4"> </div>
        <div class="row" style={{ fontSize: "16px" }}>
          <div class="col-md-12 col-sm-6 col-xs-6">
            <div style={{ textAlign: "center" }}>
              <p>
                Tous droits réservés <i class="fa fa-copyright"></i> {new Date().getFullYear()}
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
