import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import Loader from "../Loader/Loader";

const Sidebar = () => {
  const isDoctor = localStorage.getItem("isDoctor");
  const isAdmin = localStorage.getItem("isAdmin");
  const current = useSelector((state) => state.userReducer.result);
  return (
    <>
      {current ? (
        <div className="sidebar">
          <div className="sidebar-top">
            <h4>
              {current.isDoctor && "Dr"} {current?.name} {current?.lastName}
            </h4>
          </div>
          <div className="sidebar-center">
            {isAdmin && (
              <ul className="list">
                <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to={"/admin/acceuil"}
                >
                  <li className="list-item">
                    <i
                      style={{ fontSize: "20px" }}
                      className="list-item-icon fas fa-home"
                    />
                    <span className="list-item-text">Accueil</span>
                  </li>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to="/admin/docteurs/nonconv"
                >
                  <li className="list-item">
                    <i
                      style={{ fontSize: "20px" }}
                      className="fas fa-list-ul"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <span className="list-item-text">
                      Docteurs non confirmés
                    </span>
                  </li>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to="/admin/docteurs/conv"
                >
                  <li className="list-item">
                    <i style={{ fontSize: "20px" }} class="fas fa-list"></i>
                    &nbsp;&nbsp;&nbsp;
                    <span className="list-item-text">Docteurs confirmés</span>
                  </li>
                </NavLink>
                {/* <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to="/adminrdv"
                >
                  <li className="list-item">
                    <i style={{ fontSize: "20px" }} class="fas fa-list"></i>
                    &nbsp;
                    <span className="list-item-text">Liste de rendez-vous</span>
                  </li>
                </NavLink> */}
                <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to="/adminclient"
                >
                  <li className="list-item">
                    <i style={{ fontSize: "20px" }} class="fas fa-list"></i>
                    &nbsp;&nbsp;&nbsp;
                    <span className="list-item-text">Liste de patient</span>
                  </li>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to="/adminreport"
                >
                  <li className="list-item">
                    <i style={{ fontSize: "20px" }} class="fas fa-list"></i>
                    &nbsp;&nbsp;&nbsp;
                    <span className="list-item-text">Liste de rapport</span>
                  </li>
                </NavLink>
              </ul>
            )}
            {isDoctor && (
              <ul className="list">
                <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to={"/docteur/acceuil"}
                >
                  <li className="list-item">
                    <i className="list-item-icon fas fa-home" />
                    <span className="list-item-text">Acceuil</span>
                  </li>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to="/docteur/demande-rdv"
                >
                  <li className="list-item">
                    <i style={{ fontSize: "20px" }} class="fas fa-list"></i>
                    &nbsp;&nbsp;
                    <span className="list-item-text">
                      Demande de rendez-vous
                    </span>
                  </li>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to="/docteur/list-rendez-vous"
                >
                  <li className="list-item">
                    <i style={{ fontSize: "20px" }} class="fas fa-list"></i>
                    &nbsp;&nbsp;
                    <span className="list-item-text">
                      Rendez-vous confirmés
                    </span>
                  </li>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to="/docteur/rendez-vous/annuler"
                >
                  <li className="list-item">
                    <i style={{ fontSize: "20px" }} class="fas fa-list"></i>
                    &nbsp;&nbsp;
                    <span className="list-item-text">Rendez-vous annulés</span>
                  </li>
                </NavLink>
                {/* <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to="/docteur/mes-patients"
                >
                  <li className="list-item">
                    <i style={{ fontSize: "20px" }} class="fas fa-list"></i>
                    &nbsp;&nbsp;
                    <span className="list-item-text">Mes patient</span>
                  </li>
                </NavLink> */}
                <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to="/docteur/rendez-vous/refuser"
                >
                  <li className="list-item">
                    <i style={{ fontSize: "20px" }} class="fas fa-list"></i>
                    &nbsp;&nbsp;
                    <span className="list-item-text">Rendez-vous refusés</span>
                  </li>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                  to="/docteurs"
                >
                  <li className="list-item">
                    <i style={{ fontSize: "20px" }} class="fas fa-list"></i>
                    &nbsp;&nbsp;
                    <span className="list-item-text">
                      Communautés des
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;medecins
                    </span>
                  </li>
                </NavLink>
              </ul>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Sidebar;
