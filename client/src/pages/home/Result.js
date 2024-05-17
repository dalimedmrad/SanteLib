import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
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
  const searchDoctors = useCallback(async () => {
    setLoad(true);
    setDoctorvr([]);
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      let url = '/api/user/search/bytow'; // Default URL
      if (specialitéText && regionText) {
        url = `/api/user/search/bytow/${specialitéText}/${regionText}`;
      } else if (specialitéText) {
        url = `/api/user/search/byspes/${specialitéText}`;
      } else if (regionText) {
        url = `/api/user/search/byville/${regionText}`;
      }
      const { data } = await axios.get(url, config);
      setDoctorvr(data.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  }, [specialitéText, regionText]);

  useEffect(() => {
    searchDoctors();
  }, [searchDoctors]);

  return (
    <>
      <button
        disabled={!specialitéText && !regionText ? true : false}
        className="btnsearch rounded-pill"
        onClick={handleShow}
      >
        <SearchIcon />
      </button>
      <Modal size="lg" show={show} onHide={handleClose}>
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
              {doctorvr !== 0 ? (
                <div className="dattta">
                  {doctorvr.map((el) => (
                    <Docard key={el._id} el={el} />
                  ))}
                </div>
              ) : (
                <div className="rst1">Aucune resultat</div>
              )}
            </>
          ) : (
            <Loader />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Result;
