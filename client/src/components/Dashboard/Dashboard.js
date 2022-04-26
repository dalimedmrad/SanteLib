import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../../Redux/actions/user";
import { currentUser } from "../../Redux/actions/user";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { getallrdv } from "../../Redux/actions/rdv";
import { Row, Col } from "react-bootstrap";
import { rdvReducer } from "../../Redux/reducers/rdv";
import Rdv_card_Doc from "../Rdv_card_Doc";
import Rdv_card_Client from "../Rdv_card_Client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Dashboard = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallrdv());
  }, []);
  const currentProfile = useSelector((state) => state.userReducer.result);
  const rdvProfile = useSelector((state) => state.rdvReducer.result);
  // const position = {currentProfile?[currentProfile.adress[0],currentProfile.adress[1]]:[33,10]};
  const position = [33, 10];
  const year = new Date().getFullYear()	
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const hours = new Date().getHours()
  const second = new Date().getSeconds()
  const date = year+'-'+month+'-'+day+'T'+hours+':'+second;
  console.log(date);
  const currentDate = JSON.stringify(new Date());
  console.log(currentDate);

  return (
    <div className='dash'>
      {currentProfile ? (
        <div>
          <div
            style={{
              display: "flex",
              marginTop: "5px",
              justifyContent: "flex-end",
            }}
          >
            {/* <button
          onClick={() => {
            dispatch(logOut());
            history.push("/");
          }}
        >
          LOG OUT
        </button> */}
          </div>

          <div>
            {/* <link
              href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
              rel="stylesheet"
              id="bootstrap-css"
            /> */}
            {/*---- Include the above in your HEAD tag --------*/}
            <div className="container emp-profile">
              <form method="post">
                <div className="row">
                  <div className="col-md-4">
                    <div className="profile-img">
                      <MapContainer
                        center={position}
                        zoom={5}
                        scrollWheelZoom={true}
                      >
                        <TileLayer
                          attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                          <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                          </Popup>
                        </Marker>
                      </MapContainer>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="profile-head">
                      {currentProfile ? (
                        <h5>
                          {currentProfile.name} {currentProfile.lastName}{" "}
                        </h5>
                      ) : (
                        <h1>loading</h1>
                      )}
                      <h6>
                        {currentProfile ? (
                          currentProfile.profession
                        ) : (
                          <h1>Loading</h1>
                        )}
                      </h6>
                      {/* <p className="proile-rating">
                    RANKINGS : <span>8/10</span>
                  </p> */}
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            About
                          </a>
                        </li>
                        {/* <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Timeline
                      </a>
                    </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <Link to={"/editprofile"}>
                      <button>Edit Profile</button>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    {/* <div className="profile-work">
                  <p>WORK LINK</p>
                  <a href>Website Link</a>
                  <br />
                  <a href>Bootsnipp Profile</a>
                  <br />
                  <a href>Bootply Profile</a>
                  <p>SKILLS</p>
                  <a href>Web Designer</a>
                  <br />
                  <a href>Web Developer</a>
                  <br />
                  <a href>WordPress</a>
                  <br />
                  <a href>WooCommerce</a>
                  <br />
                  <a href>PHP, .Net</a>
                  <br />
                </div> */}
                  </div>
                  <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      > {currentProfile.profession == "Doctor"?
                        <div className="row">
                          <div className="col-md-6">
                            <label>Status</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {currentProfile ? (
                                currentProfile.Approved?"Approved":"You have to confirm your identity"
                              ) : (
                                <h1>Loading</h1>
                              )}
                            </p>
                          </div>
                        </div>:null}

                        {/* <div className="row">
                          <div className="col-md-6">
                            <label>User Id</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {currentProfile ? (
                                currentProfile._id
                              ) : (
                                <h1>Loading</h1>
                              )}
                            </p>
                          </div>
                        </div> */}
                        <div className="row">
                          <div className="col-md-6">
                            <label>Name</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {currentProfile ? (
                                currentProfile.name
                              ) : (
                                <h1>Loading</h1>
                              )}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <label>Last Name</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {currentProfile ? (
                                currentProfile.lastName
                              ) : (
                                <h1>Loading</h1>
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Email</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {currentProfile ? (
                                currentProfile.email
                              ) : (
                                <h1>Loading</h1>
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>ville</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {currentProfile ? (
                                currentProfile.ville
                              ) : (
                                <h1>Loading</h1>
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          {currentProfile.isAdmin?null:<div className="col-md-6">
                            <label>Profession</label>
                          </div>}
                          
                          <div className="col-md-6">
                            <p>
                              {currentProfile && !currentProfile.isAdmin ? (
                                currentProfile.profession
                              ) :null}
                            </p>
                          </div>
                          {currentProfile.isAdmin || currentProfile.profession.toLowerCase() === "client"?null:<div className="col-md-6">
                            <label>Specialité</label>
                          </div>}
                          
                          <div className="col-md-6">
                            <p>
                              {currentProfile ? (
                                currentProfile.specialité
                              ) : (
                                <h1>Loading</h1>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <label>Experience</label>
                          </div>
                          <div className="col-md-6">
                            <p>Expert</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Hourly Rate</label>
                          </div>
                          <div className="col-md-6">
                            <p>10$/hr</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Total Projects</label>
                          </div>
                          <div className="col-md-6">
                            <p>230</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>English Level</label>
                          </div>
                          <div className="col-md-6">
                            <p>Expert</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Availability</label>
                          </div>
                          <div className="col-md-6">
                            <p>6 months</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <label>Your Bio</label>
                            <br />
                            <p>Your detail description</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {currentProfile.profession === "Doctor" && rdvProfile ? (
            <div>
              <Row>
                <Col style={{textAlign:"center",borderRight:"2px solid black"}}>
                  <h1>Mes Consultations</h1>
                  <div className="d-flex flex-wrap">
                    {rdvProfile
                      .filter((el) => el.doc_id === currentProfile._id)
                      .map((el) => (
                        <Rdv_card_Doc  el={el} />
                      ))}
                  </div>
                </Col>
                <Col style={{textAlign:"center"}}>
                  <h1>Mes Rendez-vous</h1>
                  <div className="d-flex flex-wrap">
                    {rdvProfile
                      .filter((el) => el.client_id === currentProfile._id)
                      .map((el) => (
                        <Rdv_card_Client el={el} />
                      ))}
                  </div>
                </Col>
              </Row>
            </div>
          ) : rdvProfile ? (  
            <div>
              <Row>
                <h1>Mes Rendez-vous</h1>
                <div className="d-flex flex-wrap">
                  {rdvProfile
                    .filter((el) => el.client_id === currentProfile._id )
                    .map((el) => (
                      <Rdv_card_Client  el={el} />
                    ))}
                </div>
              </Row>
            </div>
          ) : null}
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};
// && new Date(el.date.toString()) <= currentDate.toString()
export default Dashboard;
