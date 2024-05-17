import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import VerticalTab from "./VerticalTab";
import { useSelector } from "react-redux";
import Serchlive1 from "../../components/Search/serchlive1";
import Serchlive2 from "../../components/Search/serchlive2";
import { Link } from "react-router-dom";
import { Col, Row, Card, CardGroup } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import alodoc from "./img/alodoc.png";
import firstimg from "./img/firstimg.png";
import secondimg from "./img/secondimg.png";
import thirdimg from "./img/thirdimg.png";
import "./home.css";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Result from "./Result";
import { specialite, region } from "../../data";

const Home2 = () => {
  const med = useSelector((state) => state.userReducer.Doc);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filterText, setfilterText] = useState("");
  const [docA, setDocA] = useState([]);
  const [specialitéText, setspecialitéText] = useState("");
  const [regionText, setregionText] = useState("");

  useEffect(() => {
    setDocA(med?.filter((el) => el.isDoctor === true));
  }, [med]);
  const textSpecialité = (newSpecText) => {
    setspecialitéText(newSpecText);
  };
  const textRegion = (newRegionText) => {
    setregionText(newRegionText);
  };
  const handleSearch = (e) => {
    setfilterText(e.target.value.toLowerCase());
    const searchFruits = docA?.filter((el) => {
      return (
        el.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        el.lastName.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilteredResults(searchFruits);
  };
  const openCity = (evt, cityName) => {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-blue", " ");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-blue";
  };
  const ld1 = document.getElementById("London1");
  const ld2 = document.getElementById("Paris1");

  const openCity1 = () => {
    ld1.style.display = "block";
    ld2.style.display = "none";
  };
  const openCity2 = () => {
    ld1.style.display = "none";
    ld2.style.display = "block";
  };
  return (
    <div>
      <>
        <div className="part1">
          <div className="hero">
            <div id="London1">
              <h1>Prenez rapidement un rendez-vous avec votre médecin !</h1>
              <h5>
                Sélectionnez votre médecin, choisissez la date et l'heure de
                votre rendez-vous et recevez votre sms/mail de confirmation.
                C’est aussi simple que ça !
              </h5>
            </div>
            <div id="Paris1" style={{ display: "none" }}>
              <h1>
                Trouvez rapidement la pharmacie la plus proche de chez vous !
              </h1>
              <h5>
                Optimisez votre temps et trouvez facilement la pharmacie ouverte
                la plus proche de chez vous !
              </h5>
            </div>
          </div>
          <div className="search1">
            <div
              style={{ height: "60px", marginTop: "30px" }}
              className="w3-bar"
            >
              <button
                className="w3-bar-item btss w3-button tablink w3-blue"
                onClick={(evt) => {
                  openCity(evt, "London");
                  openCity1();
                }}
              >
                <i class="fas fa-user-md"></i>&nbsp; Medecin
              </button>
              <button
                className="w3-bar-item btss w3-button tablink"
                onClick={(evt) => {
                  openCity(evt, "Paris");
                  openCity2();
                }}
              >
                <i className="fas fa-clinic-medical"></i>&nbsp; Pharmacie
              </button>
            </div>
            <div id="London" className="w3-border city">
              <Row>
                <Col>

                  <div class="form-outline">
                    <input
                      type="text"
                      id="form16"
                      className="form-control"
                      data-mdb-showcounter="true"
                      // value={filterText}
                      onChange={handleSearch}
                      style={{
                        width: 310,
                        padding: "25px",
                        marginLeft: "19px",
                        marginTop: "15px",
                      }}
                    />
                    <label
                      style={{ marginLeft: "10px" }}
                      className="form-label"
                      for="form16"
                    >
                      Nom du professionnel de santé
                    </label>
                    <div class="form-helper"></div>
                  </div>

                  {filterText && filteredResults && (
                    <CardGroup className="crd">
                      {filteredResults.map((item) => (
                        <Card className="crdd">
                          <Link
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontWeight: "bold",
                            }}
                            to={`/docprofile/${item._id}`}
                          >
                            <CardHeader className="hedd">
                              <img className="iimmg" src={item.image2} alt="" />
                              <h5 className="hedd1">
                                {" "}
                                Dr {item.name} {item.lastName}
                              </h5>
                              <p className="hedd2">
                                {item.specialite} -- {item.ville}
                              </p>
                            </CardHeader>
                          </Link>
                        </Card>
                      ))}
                    </CardGroup>
                  )}
                </Col>
                <Col>
                  <Serchlive1
                    textSpecialité={textSpecialité}
                    data={specialite}
                  />
                </Col>
                <Col>
                  <Serchlive2 data={region} textRegion={textRegion} />
                </Col>
                <Col>
                  {/* <Link
                to={"/filter"}
                // filterProps: {
                //   // filterText: filterText,
                //   specialitéText: specialitéText,
                //   regionText: regionText,
              > */}
                  {/* <button
                disabled={!specialitéText && !regionText ? true : false}
                className="btnsearch rounded-pill"
                onClick={handleGo}
              >
                <SearchIcon />
              </button> */}
                  <Result
                    specialitéText={specialitéText}
                    regionText={regionText}
                  />
                  {/* </Link> */}
                </Col>
              </Row>
            </div>
            <div
              id="Paris"
              className="w3-border city"
              style={{ display: "none" }}
            >
              <Row>
                <Col>
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form16"
                      className="form-control"
                      data-mdb-showcounter="true"

                      style={{
                        width: 310,
                        padding: "25px",
                        marginLeft: "19px",
                        marginTop: "15px",
                      }}
                    />
                    <label
                      style={{ marginLeft: "10px" }}
                      className="form-label"
                      for="form16"
                    >
                      Nom du pharmacie
                    </label>
                    <div class="form-helper"></div>
                  </div>
                </Col>
                <Col>
                  <Serchlive1
                    textSpecialité={textSpecialité}
                    data={specialite}
                  />
                </Col>
                <Col>
                  <Serchlive2
                    placeholder={"Region"}
                    data={region}
                    textRegion={textRegion}
                  />
                </Col>
                <Col>
                  <Link
                    to={"/filter"}
                  // filterProps: {
                  //   filterText: filterText,
                  //   specialitéText: specialitéText,
                  //   regionText: regionText,
                  // },
                  >
                    <button
                      disabled={
                        !filterText && !specialitéText && !regionText
                          ? true
                          : false
                      }
                      className="btnsearch rounded-pill"
                    >
                      <SearchIcon />
                    </button>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Comment ça fonctionne ?
            </h1>
            <h4
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              SanteLib pour les professionnels, c’est un ensemble de services et
              d’accompagnement quotidien.
            </h4>
          </div>
          <Row
            style={{
              display: "flex",

              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Col>
              <img src={firstimg} alt="img not trouvée" />

              <h5 style={{ fontWeight: "bold" }}>Je créé un compte</h5>
            </Col>
            <Col>
              <img src={secondimg} alt="img not trouvée" />

              <h5 style={{ fontWeight: "bold" }}>
                Je recherche une spécialité
              </h5>
            </Col>
            <Col>
              <img src={thirdimg} alt="img not trouvée" />

              <h5 style={{ fontWeight: "bold" }}>Je choisis mon praticien</h5>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <img src={alodoc} alt="" />
            </Col>

            <Col className="d-flex align-items-center">
              <div>
                <h2>Pourquoi choisir SanteLib.fr ?</h2>
                <h3>Créez un compte pour votre famille ou vos proches</h3>
                <p
                  style={{
                    fontFamily: "IBM Plex Sans,sans-serif",
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                    lineHeight: "calc(24/16)",
                  }}
                >
                  Le service SanteLib est accessible pour vous et vos proches.
                  En créant un compte familial, vous simplifiez vos démarches et
                  vos parcours de soins. Profitez également gratuitement du
                  carnet de vaccination électronique via mesvaccins.net.
                </p>
              </div>
            </Col>
          </Row>
          {/* </div> */}
        </div>

        <Row>
          <Col className="d-flex align-items-center">
            <div>
              <h3>Gagnez du temps, prenez rendez-vous avec vos praticiens</h3>
              <p
                style={{
                  fontFamily: "IBM Plex Sans,sans-serif",
                  color: "#4b597b",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "calc(24/16)",
                }}
              >
                Si votre praticien a souscrit à une offre de prise de
                rendez-vous en ligne (SanteLib ou autre) vous pourrez réserver
                votre créneau en quelques clics. S’il n’a pas souscrit à un
                service sur internet, un de nos conseillers se charge de toutes
                les démarches pour vous.
              </p>
            </div>
          </Col>
          <Col>
            <img src="https://allodocteur.fr/media/img/illustration-doctor.png?h=b7ddbd16e5dc2cd545fd3a16916175a9" alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="https://allodocteur.fr/media/img/illustration-assistance.png?h=3949cbe6310cab97cb161c66d9c41525" alt="" />
          </Col>
          <Col className="d-flex align-items-center">
            <div>
              <h3>Faites appel à notre service de conciergerie</h3>

              <p
                style={{
                  fontFamily: "IBM Plex Sans,sans-serif",
                  color: "#4b597b",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "calc(24/16)",
                }}
              >
                Si vous n’en avez pas le temps ou la possibilité, un opérateur
                SanteLib peut se charger d’appeler les secrétariats et prendre
                vos rendez-vous à votre place.
              </p>
            </div>
          </Col>
        </Row>
        <div
          id="carouselExampleIndicators"
          class="carousel slide tay1"
          data-mdb-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselExampleIndicators"
              data-mdb-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselExampleIndicators"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselExampleIndicators"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://bpo.i-sante.tn/sites/default/files/styles/slideshow_images/public/banner/Image4.jpg?itok=QF1xgIHK"
                class="d-block w-100 tay"
                alt="Wild Landscape"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.inc-conso.fr/sites/default/files/dossier-medical-numerique.png"
                class="d-block w-100 tay"
                alt="Camera"
              />
            </div>
            <div class="carousel-item">
              <img
                src="data:image/jpeg;base64,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"
                class="d-block w-100 tay"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <h4>Les praticiens témoignent</h4>
        <p
          style={{
            fontFamily: "IBM Plex Sans,sans-serif",
            color: "#4b597b",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "calc(24/16)",
          }}
        >
          Des praticiens présents sur SanteLib.fr témoignent sur le site.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Cards />
        </div>
        <img
          width="250"
          height="300"
          src="https://allodocteur.fr/media/img/illustration-faq.svg?h=b5809bdb5b9d1536b768e77e7a1b001d"
          alt=""
        />
        <h3>FAQ</h3>
        <p
          style={{
            fontFamily: "IBM Plex Sans,sans-serif",
            color: "#4b597b",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "calc(24/16)",
          }}
        >
          Une question sur SantéLib ?
        </p>
        <div style={{ margin: "30px 70px 0 70px", padding: "10px" }}>
          <VerticalTab />
        </div>
      </>
    </div>
  );
};

export default Home2;
