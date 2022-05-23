import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../Redux/actions/user";
import "./Navbar.css";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import { Avatar } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const Navbar = ({ handleShow }) => {
  const profilename = useSelector((state) => state.userReducer.result);
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.userReducer.result);
  const isAdmin = localStorage.getItem("isAdmin");
  const isDoctor = localStorage.getItem("isDoctor");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="nvs">
      {token ? (
        <>
          {user && (
            <nav className="navbar fixed-top navbar-expand-lg p-2 mb navbar-light bg-light">
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  {!isAdmin && !isDoctor ? (
                    <button className="btn ml-3 mr-3" onClick={handleShow}>
                      <ClearAllIcon />
                    </button>
                  ) : null}
                  <Link to={!isAdmin && !isDoctor && "/"}>
                    <a className="navbar-brand">
                      <img
                        className="logs"
                        src={process.env.PUBLIC_URL + "/log1.png"}
                      />
                    </a>
                  </Link>
                </div>
                <div className="d-flex align-items-center">
                  <ul
                    className="navbar-nav me-auto mb-1 mb-lg-0"
                    style={{ marginRight: "140px" }}
                  >
                    {!isAdmin && !isDoctor && (
                      <li className="nav-item">
                        <Link style={{ textDecoration: "none" }} to="/">
                          <a style={{ fontSize: "20px" }} className="nav-link">
                            <i className="fas fa-home"></i> Acceuil
                          </a>
                        </Link>
                      </li>
                    )}

                    {profilename ? (
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle d-flex align-items-center hidden-arrow"
                          id="navbarDropdownMenuAvatar"
                          role="button"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <div>
                            {profilename?.image2 ? (
                              <>
                                {/* <img
                                      className="avatar"
                                      src={profilename.image2 && profilename.image2}
                                    /> */}
                                <Avatar
                                  className="avatar"
                                  src={profilename.image2 && profilename.image2}
                                />
                              </>
                            ) : (
                              <AccountCircleIcon className="avatar" />
                            )}
                          </div>
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="navbarDropdownMenuAvatar"
                        >
                          {!isAdmin && !isDoctor && (
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/mes-rendez-vous"
                            >
                              <li>
                                <a
                                  style={{ fontSize: "18px" }}
                                  className="dropdown-item"
                                >
                                  <i className="far fa-calendar-alt"></i> Mes
                                  rendez-vous
                                </a>
                              </li>
                            </Link>
                          )}
                          <Link
                            style={{ textDecoration: "none" }}
                            to={
                              isDoctor ? "/docteur/mon-profile" : "/mon-profile"
                            }
                          >
                            <li>
                              <a
                                style={{ fontSize: "18px" }}
                                className="dropdown-item"
                              >
                                <i className="fas fa-user-circle"></i> Mon
                                profile
                              </a>
                            </li>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to={"/modifier/mot-de-passe"}
                          >
                            <li>
                              <a
                                style={{ fontSize: "18px" }}
                                className="dropdown-item"
                              >
                                <VpnKeyIcon /> Modifier mon mot de passe
                              </a>
                            </li>
                          </Link>
                          {!isAdmin && (
                            <Link style={{ textDecoration: "none" }} to="/rec">
                              <li>
                                <a
                                  style={{ fontSize: "18px" }}
                                  className="dropdown-item"
                                >
                                  <i class="fas fa-comment-alt"></i> Contact
                                </a>
                              </li>
                            </Link>
                          )}
                          <Link
                            to="/"
                            onClick={handleLogout}
                            style={{ textDecoration: "none" }}
                          >
                            <li>
                              <a
                                style={{ fontSize: "18px" }}
                                className="dropdown-item"
                              >
                                <i class="fas fa-sign-out-alt"></i> Se
                                Deconnecter
                              </a>
                            </li>
                          </Link>
                        </ul>
                      </div>
                    ) : (
                      <li className="nav-item">
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/connexion"
                        >
                          <a style={{ fontSize: "19px" }} className="nav-link">
                            <i className="fas fa-sign-in-alt"></i> Se connecter
                          </a>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <hr />
            </nav>
          )}
        </>
      ) : (
        <nav className="navbar fixed-top navbar-expand-lg p-2 mb navbar-light bg-light">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {!isAdmin && !isDoctor ? (
                <button className="btn ml-3 mr-3" onClick={handleShow}>
                  <ClearAllIcon />
                </button>
              ) : null}
              <Link to={!isAdmin && !isDoctor && "/"}>
                <a className="navbar-brand">
                  <img
                    className="logs"
                    src={process.env.PUBLIC_URL + "/log1.png"}
                  />
                </a>
              </Link>
            </div>
            {/* Right elements */}
            <div className="d-flex align-items-center">
              <ul
                className="navbar-nav me-auto mb-1 mb-lg-0"
                style={{ marginRight: "140px" }}
              >
                {!isAdmin && !isDoctor && (
                  <li className="nav-item">
                    <Link style={{ textDecoration: "none" }} to="/">
                      <a style={{ fontSize: "20px" }} className="nav-link">
                        <i className="fas fa-home"></i> Acceuil
                      </a>
                    </Link>
                  </li>
                )}

                {profilename ? (
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle d-flex align-items-center hidden-arrow"
                      id="navbarDropdownMenuAvatar"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div>
                        {profilename?.image2 ? (
                          <>
                            {/* <img
                            className="avatar"
                            src={profilename.image2 && profilename.image2}
                          /> */}
                            <Avatar
                              className="avatar"
                              src={profilename.image2 && profilename.image2}
                            />
                          </>
                        ) : (
                          <AccountCircleIcon className="avatar" />
                        )}
                      </div>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >
                      {!isAdmin && !isDoctor && (
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/mes-rendez-vous"
                        >
                          <li>
                            <a
                              style={{ fontSize: "18px" }}
                              className="dropdown-item"
                            >
                              <i className="far fa-calendar-alt"></i> Mes
                              rendez-vous
                            </a>
                          </li>
                        </Link>
                      )}
                      <Link
                        style={{ textDecoration: "none" }}
                        to={isDoctor ? "/docteur/mon-profile" : "/mon-profile"}
                      >
                        <li>
                          <a
                            style={{ fontSize: "18px" }}
                            className="dropdown-item"
                          >
                            <i className="fas fa-user-circle"></i> Mon profile
                          </a>
                        </li>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={"/modifier/mot-de-passe"}
                      >
                        <li>
                          <a
                            style={{ fontSize: "18px" }}
                            className="dropdown-item"
                          >
                            <VpnKeyIcon /> Modifier le mot de passe
                          </a>
                        </li>
                      </Link>
                      {!isAdmin ? (
                        <Link style={{ textDecoration: "none" }} to="/rec">
                          <li>
                            <a
                              style={{ fontSize: "18px" }}
                              className="dropdown-item"
                            >
                              <i class="fas fa-comment-alt"></i> Contact
                            </a>
                          </li>
                        </Link>
                      ) : null}
                      <Link style={{ textDecoration: "none" }}>
                        <li>
                          <a
                            onClick={() => {
                              dispatch(logOut());
                              navigate("/");
                            }}
                            style={{ fontSize: "18px" }}
                            className="dropdown-item"
                          >
                            <i class="fas fa-sign-out-alt"></i> Se Deconnecter
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                ) : (
                  <li className="nav-item">
                    <Link style={{ textDecoration: "none" }} to="/connexion">
                      <a style={{ fontSize: "19px" }} className="nav-link">
                        <i className="fas fa-sign-in-alt"></i> Se connecter
                      </a>
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            {/* Right elements */}
          </div>
          {/* Container wrapper */}
          <hr />
        </nav>
      )}
    </div>
  );
};

export default Navbar;
