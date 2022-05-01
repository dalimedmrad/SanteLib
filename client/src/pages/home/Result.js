import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import Docard from "../../components/doccard/Docard";
import Loader from "../../components/Loader/Loader";
import "./home.css";

const Result = ({ specialitéText, regionText }) => {
  const [show, setShow] = useState(false);
  const [doctorvr, setDoctorvr] = useState([]);
  const [load, setLoad] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cherche = async () => {
    setLoad(true);
    setDoctorvr([]);
    // const opts = {
    //   specialitéTex: search.specialitéText,
    //   regionTex: search.regionText,
    // };
    // console.log(opts);
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      // const { data } = await axios.get(
      //   "/api/user/search/bytow",
      //   search,
      //   config
      // );
      const { data } = await axios.get(
        `/api/user/search/bytow/${specialitéText}/${regionText}`
      );
      setDoctorvr(data.result);
      setLoad(false);
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
  const cherche1 = async () => {
    setDoctorvr([]);
    setLoad(true);
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      // const { data } = await axios.get(
      //   "/api/user/search/bytow",
      //   search,
      //   config
      // );
      const { data } = await axios.get(
        `/api/user/search/byspes/${specialitéText}`
      );
      setDoctorvr(data.result);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };
  const cherche2 = async () => {
    setDoctorvr([]);
    setLoad(true);
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      // const { data } = await axios.get(
      //   "/api/user/search/bytow",
      //   search,
      //   config
      // );
      const { data } = await axios.get(
        `/api/user/search/byville/${regionText}`,
        config
      );
      setDoctorvr(data.result);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (specialitéText && regionText) cherche();
    if (specialitéText && !regionText) cherche1();
    if (!specialitéText && regionText) cherche2();
  }, [specialitéText, regionText]);
  return (
    <>
      <button
        disabled={!specialitéText && !regionText ? true : false}
        className="btnsearch rounded-pill"
        onClick={handleShow}
      >
        <SearchIcon />
      </button>
      <Modal
        className="dddd"
        size="lg"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {specialitéText && regionText && (
              <div className="title1">
                {specialitéText} à {regionText} en Tunisie
              </div>
            )}
            {specialitéText && !regionText && (
              <div className="title1">{specialitéText} en Tunisie</div>
            )}
            {regionText && !specialitéText && (
              <div className="title1">Particien à {regionText} en Tunisie</div>
            )}
            {!regionText && !specialitéText && (
              <div className="title1">Trouvez un médecin en Tunisie</div>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="dddd1">
          {!load ? (
            <>
              {doctorvr != 0 ? (
                doctorvr.map((el) => <Docard key={el._id} el={el} />)
              ) : (
                <div className="rst1">Aucune resultat</div>
              )}
            </>
          ) : (
            <Loader />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Result;
