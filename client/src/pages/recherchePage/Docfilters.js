import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Docard from "../../components/doccard/Docard";
import Loader from "../../components/Loader/Loader";
import "./Docfilters.css";
import { Card, CardGroup, Col } from "react-bootstrap";
import { CardHeader } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

const Docfilters = () => {
  const doc = useSelector((state) => state.userReducer.Doc);
  const [filteredResults, setFilteredResults] = useState([]);
  const [docA, setDocA] = useState([]);

  const location = useLocation();
  const { specialitéText, regionText } = location.state;
  const [filterText, setfilterText] = useState("");
  // const [specialitéText, setspecialitéText] = useState("");
  // const [regionText, setregionText] = useState("");
  const [doctorvr, setDoctorvr] = useState([]);
  const [search, setSearch] = useState({
    filterText: "",
    specialitéText: "",
    regionText: "",
  });
  const specialite = [
    "L’allergologie ou l’immunologie",
    "L’anesthésiologie",
    "L’andrologie",
    "Cardiologie",
    "Chirurgie",
    "Chirurgie cardiaque",
    "Chirurgie esthétique, plastique et reconstructive",
    "Chirurgie générale",
    "Chirurgie maxillo-faciale",
    "Chirurgie pédiatrique",
    "Chirurgie thoracique",
    "Chirurgie vasculaire",
    "Neurochirurgie",
    "Dermatologie",
    "L’endocrinologie",
    "Gastro-entérologie",
    "Gériatrie",
    "Gynécologie",
    "L’hématologie",
    "L’hépatologie",
    "L’infectiologie",
    "Médecine aiguë",
    "Médecine du travail",
    "Médecine générale",
    "Médecine interne",
    "Médecine nucléaire",
    "Médecine palliative",
    "Médecine physique",
    "Médecine préventive",
    "Néonatologie",
    "Néphrologie",
    "Neurologie",
    "L’odontologie",
    "L’oncologie",
    "L’obstétrique",
    "L’ophtalmologie",
    "L’orthopédie",
    "L’Oto-rhino-laryngologie",
    "Pédiatrie",
    "Pneumologie",
    "Psychiatrie",
    "Radiologie",
    "Radiothérapie",
    "Rhumatologie",
    "L’urologie",
  ];
  const region = [
    "Tunis",
    "Ariana",
    "Ben arous",
    "Manouba",
    "Benzart",
    "Kef",
    "Jendouba",
    "Guasrine",
    "Jendouba",
    "Seliana",
    "Nabeul",
    "Sfax",
    "Sousse",
    "Mestir",
    "Mehdia",
    "Kairouane",
    "Gafsa",
    "Gabes",
    "Guebili",
    "Tozeur",
    "Medenine",
    "Tataouine",
    "Zaghouane",
    "Sidi bouzid",
  ];
  // const searchItems = (searchValue) => {
  //   setfilterText(searchValue);
  //   setFilteredResults(
  //     doctorvr.filter(
  //       (item) =>
  //         item.name.toLowerCase().includes(filterText.toLowerCase()) ||
  //         item.lastName.toLowerCase().includes(filterText.toLowerCase())
  //     )
  //   );
  //   // setFilteredResults(filteredData);
  // };
  const handleSearch = (e) => {
    setfilterText(e.target.value.toLowerCase());
    const searchFruits = docA.filter((el) => {
      return (
        el.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        el.lastName.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilteredResults(searchFruits);
  };
  useEffect(() => {
    // const fullName = !props.location.filterProps
    //   ? null
    //   : props.location.filterProps.filterText;
    // const specialite = specialitéText;
    // const ville = regionText;
    // setfilterText(fullName);
    // setspecialitéText(specialite);
    // setregionText(ville);
    // dispatch(getalldoctors());
    setSearch({
      ...search,
      // filterText: fullName,
      specialitéText: specialitéText,
      regionText: regionText,
    });
    setDoctorvr(
      doc?.filter(
        (el) =>
          (el.isDoctor === true && el.specialite === specialitéText) ||
          el.ville === regionText
      )
    );
    setDocA(doc?.filter((el) => el.isDoctor === true));
  }, [doc]);
  // console.log(specialitéText, regionText);

  const cherche = () => {
    setDoctorvr([]);
    setDoctorvr(
      doc?.filter(
        (el) =>
          (el.isDoctor === true && el.specialite === search.specialitéText) ||
          el.ville === search.regionText
      )
    );
    // console.log(doctorvr);
  };
  return (
    <div className="docfilter">
      <div>
        <div className="navsrch">
          <Col>
            <select
              onChange={(e) => {
                setSearch({ ...search, specialitéText: e.target.value });
                cherche();
              }}
              value={search.specialitéText}
              className="form-control"
            >
              <option>--- Choisir une spécialité ---</option>
              {specialite.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
          </Col>
          <Col>
            <select
              onChange={(e) => {
                setSearch({ ...search, regionText: e.target.value });
                cherche();
              }}
              value={search?.regionText}
              className="form-control"
            >
              <option>--- Choisir une ville ---</option>
              {region.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
          </Col>
        </div>
        <div className="searchcontent">
          <div className="filt1">
            <Col>
              <input
                placeholder="Nom du professionnel de santé"
                className="form-control"
                type="text"
                onChange={handleSearch}
              />
              {filterText && filteredResults && (
                <CardGroup className="crd1">
                  {filteredResults.map((item) => (
                    <Card className="crdd1">
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontWeight: "bold",
                        }}
                        to={`/docprofile/${item._id}`}
                      >
                        <CardHeader className="hedd1">
                          <img className="iimmg1" src={item.image2} />
                          <h5 className="hedd11">
                            {" "}
                            Dr {item.name} {item.lastName}
                          </h5>
                          <p className="hedd22">
                            {item.specialite} -- {item.ville}
                          </p>
                        </CardHeader>
                      </Link>
                    </Card>
                  ))}
                </CardGroup>
              )}
            </Col>
          </div>
          <div className="filt">
            {/* {doctorvr
              ?.filter(
                (el) =>
                  el.name
                    .toLowerCase()
                    .includes(search.filterText.toLowerCase()) ||
                  el.lastName
                    .toLowerCase()
                    .includes(search.filterText.toLowerCase())
              )
              .map((el) => (
                <Docard key={el._id} el={el} />
              ))} */}
            {doctorvr ? (
              <>
                {doctorvr != 0 ? (
                  doctorvr.map((el) => <Docard key={el._id} el={el} />)
                ) : (
                  <div>Acunne resultat</div>
                )}
              </>
            ) : (
              <Loader />
            )}
          </div>

          <div className="filt2">ethethtehet</div>
        </div>
      </div>
    </div>
  );
};

export default Docfilters;
