import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Docard from "../../components/doccard/Docard";
import Loader from "../../components/Loader/Loader";
import "./Docfilters.css";
import { Card, CardGroup, Col } from "react-bootstrap";
import { CardHeader, TextField } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";

const Docfilters = () => {
  const doc = useSelector((state) => state.userReducer.Doc);
  const [filteredResults, setFilteredResults] = useState([]);
  const [docA, setDocA] = useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [inputValue1, setInputValue1] = React.useState("");
  const location = useLocation();
  const { specialitéText, regionText } = location.state;
  const [filterText, setfilterText] = useState("");
  const [doctorvr, setDoctorvr] = useState([]);
  const [search, setSearch] = useState({
    specialitéTex: "",
    regionTex: "",
  });
  const specialite = [
    "L’allergologie ou l’immunologie",
    "L’anesthésiologie",
    "L’andrologie",
    "Cardiologue (Coeur)",
    "Chirurgie",
    "Chirurgie cardiaque",
    "Chirurgien esthétique, plastique et reconstructive",
    "Chirurgien Orthopédiste Traumatologue",
    "Dentiste",
    "Dermatologue (Peau)",
    "Endocrinologue Diabétologue",
    "Généraliste",
    "Chirurgien générale",
    "Chirurgien maxillo-faciale",
    "Chirurgien pédiatrique",
    "Chirurgien thoracique",
    "Chirurgien vasculaire",
    "Neurochirurgie",
    "Dermatologie",
    "L’endocrinologie",
    "Gastro-entérologie",
    "Gériatrie",
    "Gynécologue Obstétricien",
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
    setSearch({
      ...search,
      // filterText: fullName,
      specialitéTex: specialitéText,
      regionTex: regionText,
    });

    setDocA(doc?.filter((el) => el.isDoctor === true));
    setDoctorvr(
      docA?.filter(
        (el) => el.specialite === specialitéText || el.ville === regionText
      )
    );
  }, [doc, search, docA, regionText, specialitéText]);
  // console.log(location);
  const cherche = async () => {
    // console.log(search);
    setDoctorvr([]);
    // const opts = {
    //   specialitéTex: search.specialitéText,
    //   regionTex: search.regionText,
    // };
    // console.log(opts);
    try {
      //const config = { headers: { "Content-Type": "application/json" } };
      // const { data } = await axios.get(
      //   "/api/user/search/bytow",
      //   search,
      //   config
      // );
      const { data } = await axios.get(
        `/api/user/search/bytow/${search.specialitéTex}/${search.regionTex}`
      );
      setDoctorvr(data.result);
    } catch (error) {
      console.log(error);
    }

    // setDoctorvr(
    //   docA?.filter(
    //     (el) =>
    //       el.specialite === search?.specialitéText &&
    //       el.ville === search?.regionText
    //   )
    // );
    // console.log(doctorvr);
  };
  const cherche1 = () => {
    setDoctorvr([]);
    setDoctorvr(docA?.filter((el) => el.specialite === search?.specialitéText));
  };
  const cherche2 = () => {
    setDoctorvr([]);
    setDoctorvr(docA?.filter((el) => el.ville === search?.regionText));
  };
  const textRegion = (newRegionText) => {
    setSearch({ ...search, regionTex: newRegionText });
  };
  const textRegion1 = (newRegionText) => {
    setSearch({ ...search, specialitéTex: newRegionText });
  };
  const handelSearch = () => {
    if (search.regionTex && search.specialitéTex) cherche();
    if (search.specialitéTex && !search.regionTex) cherche1();
    if (search.regionTex && !search.specialitéTex) cherche2();
  };
  return (
    <div className="docfilter">
      <div>
        {search.specialitéTex && search.regionTex && (
          <div className="title">
            {search?.specialitéTex} à {search?.regionTex} en Tunisie
          </div>
        )}
        {search.specialitéTex && !search.regionTex && (
          <div className="title">{search?.specialitéTex} en Tunisie</div>
        )}
        {search.regionTex && !search.specialitéTex && (
          <div className="title">
            Particien à {search?.regionTex} en Tunisie
          </div>
        )}
        {!search.regionTex && !search.specialitéTex && (
          <div className="title">Trouvez un médecin en Tunisie</div>
        )}
        <div className="navsrch">
          <Col>
            {/* <select
              onChange={(e) => {
                setSearch({ ...search, specialitéText: e.target.value });
              }}
              value={search?.specialitéText}
              className="form-control"
            >
              <option value="">--- Choisir une spécialité ---</option>
              {specialite.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select> */}
            <Autocomplete
              id="combo-box-demo"
              value={search.specialitéTex}
              options={specialite}
              onChange={(event, newValue) => {
                // setValue(newValue);
                textRegion1(newValue);
              }}
              // name={props.placeholder}
              inputValue={inputValue1}
              onInputChange={(event, newInputValue) => {
                setInputValue1(newInputValue);
              }}
              style={{ width: 300 }}
              // onChange={(e) =>
              //   setSearch({ ...search, regionText: e.target.value })
              // }
              renderInput={(params) => (
                <TextField {...params} label="Spécialité" variant="outlined" />
              )}
            />
          </Col>
          <Col>
            {/* <select
              onChange={(e) =>
                setSearch({ ...search, regionText: e.target.value })
              }
              value={search?.regionText}
              className="form-control"
            >
              <option value="">--- Choisir une ville ---</option>
              {region.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select> */}
            <Autocomplete
              id="combo-box-demo"
              value={search.regionTex}
              options={region}
              onChange={(event, newValue) => {
                // setValue(newValue);
                textRegion(newValue);
              }}
              // name={props.placeholder}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              style={{ width: 300 }}
              // onChange={(e) =>
              //   setSearch({ ...search, regionText: e.target.value })
              // }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Quelle est votre ville"
                  variant="outlined"
                />
              )}
            />
          </Col>
          <Col>
            <button
              disabled={search.specialitéTex || search.regionTex ? false : true}
              className="btnsearch rounded-pill"
              onClick={handelSearch}
            >
              <SearchIcon />
            </button>
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
                          <img className="iimmg1" src={item.image2} alt="" />
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
                {doctorvr !== 0 ? (
                  doctorvr.map((el) => <Docard key={el._id} el={el} />)
                ) : (
                  <div className="rst">Aucune resultat</div>
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
