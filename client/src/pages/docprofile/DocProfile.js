import React, { useEffect } from "react";
import "./DocProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { Row, Container, Col, Image, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate, useParams } from "react-router-dom";
import RoomIcon from "@material-ui/icons/Room";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { green } from "@material-ui/core/colors";
import MailIcon from "@material-ui/icons/Mail";
import Swal from "sweetalert2";
import { getOneById } from "../../Redux/actions/user";
import Loader from "../../components/Loader/Loader";

const DocProfile = () => {
  const params = useParams();
  const navigate = useNavigate();

  // const profile = props.location.profileProps.el;
  // const  {doc}  = location.state;
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const { docDetail, loading } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(getOneById(params.id));
  }, [params.id]);
  const handleGo = () => {
    navigate("/prener-rdv", {
      state: { docDetail },
    });
  };
  const handleAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oups...",
      text: "Veuillez créer un compte ou  se connecter pour prener un rendez-vous !",
    });
  };
  const handleAlert1 = () => {
    Swal.fire({
      icon: "error",
      title: "Oups...",
      text: "Veuillez créer un compte ou  se connecter pour contacter le docteur !",
    });
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="profile-card">
          <Container className="p-5" fluid>
            <Row className="p-1">
              <Col style={{ marginLeft: "20px" }} xs={1}>
                <Image
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "25px",
                  }}
                  src={docDetail?.image2}
                />
              </Col>
              <Col xs={8} className="d-flex flex-column align-items-start">
                <Row>
                  <h1 style={{ marginLeft: "15px" }}>
                    Dr {docDetail?.name} {docDetail?.lastName}&nbsp;
                    <CheckCircleIcon
                      titleAccess="Compte activé"
                      style={{
                        color: green[500],
                        fontSize: "30px",
                        fontWeight: "bold",
                      }}
                    />
                  </h1>
                </Row>
                <Row>
                  <h2 style={{ marginLeft: "20px" }}>
                    {docDetail?.specialite}
                  </h2>
                </Row>
                <Row>
                  <h4 style={{ display: "flex", marginLeft: "7px" }}>
                    <RoomIcon className="i1" /> {docDetail?.ville}
                  </h4>
                </Row>
              </Col>
              <Col className="d-flex align-items-center">
                {token ? (
                  <Button onClick={handleGo} variant="warning">
                    Prendre un Rendez-Vous{" "}
                  </Button>
                ) : (
                  <Button onClick={handleAlert} variant="warning">
                    Prendre un Rendez-Vous{" "}
                  </Button>
                )}
              </Col>
            </Row>
          </Container>

          <Container className="mt-5 p-5">
            <Row>
              <Col className="d-flex infos flex-column">
                <h1 style={{ color: "blue", fontWeight: "bold" }}>
                  Informations de contact
                </h1>
                {token ? (
                  <Button
                    href={`mailto:${docDetail?.email}`}
                    style={{
                      width: "35%",
                      marginTop: "7%",
                      marginBottom: "35px",
                    }}
                  >
                    <MailIcon style={{ marginTop: "-2%" }} /> Envoyer un Message
                  </Button>
                ) : (
                  <Button
                    style={{
                      width: "35%",
                      marginTop: "7%",
                      marginBottom: "35px",
                    }}
                    onClick={handleAlert1}
                  >
                    <MailIcon style={{ marginTop: "-2%" }} /> Envoyer un Message
                  </Button>
                )}
                <h5 className="adrr">
                  <RoomIcon style={{ color: "blue", fontSize: "18px" }} />{" "}
                  {docDetail?.addressecab}
                </h5>
                <h5 className="adrr">
                  <i
                    style={{ color: "blue", fontSize: "18px" }}
                    className="fas fa-phone-alt"
                  ></i>
                  &nbsp;&nbsp;
                  {docDetail?.phone}
                </h5>
                <h5 className="adrr">
                  <i
                    style={{ color: "blue", fontSize: "18px" }}
                    className="fas fa-phone-alt"
                  ></i>
                  &nbsp;&nbsp;
                  {docDetail?.phone1}
                </h5>
              </Col>
              <Col style={{ overflow: "hidden" }}>
                <MapContainer
                  center={docDetail?.position}
                  zoom={10}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={docDetail?.position}>
                    <Popup>Gouvernement du {docDetail?.ville}</Popup>
                  </Marker>
                </MapContainer>
              </Col>
            </Row>
          </Container>

          <Container className="mt-5 p-5">
            <h1
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "blue",
                marginBottom: "25px",
              }}
            >
              Horaires d'ouvertures
            </h1>
            {days?.map((el, index) => (
              <>
                {docDetail?.horaire[index]?.seance != "ferme" && (
                  <>
                    <Row className="d-flex justify-content-center bggg1">
                      <Col
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                        className="d-flex justify-content-start"
                      >
                        {el}
                      </Col>
                      <Col className="d-flex justify-content-end">
                        {docDetail?.horaire[index]?.seance === "double" && (
                          <>
                            <QueryBuilderIcon style={{ color: "blue" }} />
                            &nbsp; {docDetail.horaire[index]?.start}&nbsp;{" "}
                            <b>{">"}</b> &nbsp;
                            {docDetail.horaire[index]?.end}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {docDetail.horaire[index]?.startOne}&nbsp;{" "}
                            <b>{">"}</b> &nbsp;
                            {docDetail.horaire[index]?.endOne}
                          </>
                        )}
                        {docDetail?.horaire[index]?.seance === "unique" && (
                          <>
                            <QueryBuilderIcon style={{ color: "blue" }} />
                            &nbsp; {docDetail.horaire[index]?.start}&nbsp;{" "}
                            <b>{">"}</b> &nbsp;
                            {docDetail?.horaire[index]?.end}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                          </>
                        )}
                      </Col>
                      {/* <hr className="bggg1" /> */}
                    </Row>
                  </>
                )}
                {docDetail?.horaire[index]?.seance === "ferme" && (
                  <>
                    <Row className="d-flex justify-content-center bggg">
                      <Col
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                        className="d-flex justify-content-start"
                      >
                        {el}
                      </Col>
                      <Col className="d-flex justify-content-end "></Col>
                      {/* <hr className="bggg1" /> */}
                    </Row>
                  </>
                )}
              </>
            ))}
          </Container>
        </div>
      )}
    </div>
  );
};

export default DocProfile;
