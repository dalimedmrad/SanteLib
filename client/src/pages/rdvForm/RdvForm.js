import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postrdv } from "../../Redux/actions/rdv";
import { Link } from "react-router-dom";
import "./RdvForm.css";
import Calendar from "react-calendar";
import Swal from "sweetalert2";
import axios from "axios";
import { getToken, sendSMS } from "../../orangeSMS";

const RdvForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { docDetail } = location.state;
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.result);

  // const [rdvstate, setrdvstate] = useState({
  //   client_name: "",
  //   doc_name: "",
  //   phone: "",
  //   client_id: "",
  //   doc_id: "",
  //   specialite: "",
  // });
  const [client_id, setClient_id] = useState("");
  const [doc_id, setDoc_id] = useState("");
  const [doc_name, setDoc_name] = useState("");
  const [client_name, setcClient_name] = useState("");

  const [phone, setPhone] = useState("");
  const [specialite, setSpecialite] = useState("");
  const [dat, onChange] = useState();
  const [motif, setMotif] = useState("");
  const [mode, setMode] = useState("");
  const [sexe, setsexe] = useState("");
  const [datnaiss, setdatnaiss] = useState("");
  const [emailPatient, setEmailPass] = useState("");

  const [ind, setInd] = useState([]);
  useEffect(() => {
    setClient_id(currentUser ? currentUser._id : "");
    setDoc_id(docDetail ? docDetail._id : "");
    setcClient_name(
      currentUser ? `${currentUser.name} ${currentUser.lastName}` : ""
    );
    setDoc_name(docDetail ? `${docDetail.name} ${docDetail.lastName}` : "");
    setSpecialite(docDetail ? docDetail.specialite : "");
    setPhone(currentUser ? currentUser.phone : "");
    setsexe(currentUser?.sexe);
    setdatnaiss(currentUser ? currentUser.datnaiss : "");
    setEmailPass(currentUser ? currentUser.email : "");
    docDetail.horaire.filter((el, index) => {
      if (el.seance === "ferme") {
        ind.push(index);
      }
    });
    const slidePage = document.querySelector(".slide-page");
    const nextBtnFirst = document.querySelector(".firstNext");
    const prevBtnSec = document.querySelector(".prev-1");
    const nextBtnSec = document.querySelector(".next-1");
    const prevBtnThird = document.querySelector(".prev-2");
    const nextBtnThird = document.querySelector(".next-2");
    const prevBtnFourth = document.querySelector(".prev-3");
    const submitBtn = document.querySelector(".submit");
    // const progressText = document.querySelectorAll(".step p");
    // const progressCheck = document.querySelectorAll(".step .check");
    // const bullet = document.querySelectorAll(".step .bullet");
    let current = 1;
    nextBtnFirst.addEventListener("click", function (event) {
      event.preventDefault();
      slidePage.style.marginLeft = "-25%";
      // bullet[current - 1].classList.add("active");
      // progressCheck[current - 1].classList.add("active");
      // progressText[current - 1].classList.add("active");
      current += 1;
    });
    nextBtnSec.addEventListener("click", function (event) {
      event.preventDefault();
      slidePage.style.marginLeft = "-50%";
      // bullet[current - 1].classList.add("active");
      // progressCheck[current - 1].classList.add("active");
      // progressText[current - 1].classList.add("active");
      current += 1;
    });
    nextBtnThird.addEventListener("click", function (event) {
      event.preventDefault();
      slidePage.style.marginLeft = "-75%";
      // bullet[current - 1].classList.add("active");
      // progressCheck[current - 1].classList.add("active");
      // progressText[current - 1].classList.add("active");
      current += 1;
    });
    // submitBtn.addEventListener("click", function(){
    //   bullet[current - 1].classList.add("active");
    //   progressCheck[current - 1].classList.add("active");
    //   progressText[current - 1].classList.add("active");
    //   current += 1;
    //   setTimeout(function(){
    //     alert("Your Form Successfully Signed up");
    //   },800);
    // });
    prevBtnSec.addEventListener("click", function (event) {
      event.preventDefault();
      slidePage.style.marginLeft = "0%";
      // bullet[current - 2].classList.remove("active");
      // progressCheck[current - 2].classList.remove("active");
      // progressText[current - 2].classList.remove("active");
      current -= 1;
    });
    prevBtnThird.addEventListener("click", function (event) {
      event.preventDefault();
      slidePage.style.marginLeft = "-25%";
      // bullet[current - 2].classList.remove("active");
      // progressCheck[current - 2].classList.remove("active");
      // progressText[current - 2].classList.remove("active");
      current -= 1;
    });
    prevBtnFourth.addEventListener("click", function (event) {
      event.preventDefault();
      slidePage.style.marginLeft = "-50%";
      // bullet[current - 2].classList.remove("active");
      // progressCheck[current - 2].classList.remove("active");
      // progressText[current - 2].classList.remove("active");
      current -= 1;
    });
  }, [docDetail, currentUser]);
  const sendMail = async () => {
    const message = `Bonjour Ms/Mme ${client_name},
    
    Votre demande de consultation a été envoyer avec succès.
    Vous allez recevoir un email/SMS lors de la confirmation par le docteur .

    A bientôt.
    `;
    const email = currentUser.email;
    const data = { email, message };
    const res = await axios.post("/api/user/sendmail", data);
  };
  const sendMsg = async () => {
    const token = await getToken();
    const address = `+216${phone}`;
    const message = `Bonjour Ms/Mme ${client_name},Votre demande de consultation a été envoyé avec succès.Vous allez recevoir un SMS/e-mail lors de la confirmation du docteur.`;
    const res = await sendSMS(address, message, token);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length != 8) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: "Votre numéro de mobile est invalide",
      });
    } else if (client_name && phone && dat && mode && datnaiss && sexe) {
      const date = dat.toDateString();
      dispatch(
        postrdv(
          {
            client_id,
            doc_id,
            client_name,
            doc_name,
            phone,
            specialite,
            date,
            mode,
            motif,
            datnaiss,
            sexe,
            emailPatient,
          },
          navigate
        )
      );
      sendMail();
      sendMsg();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: "SVP !, Veuillez remplir tous les champs.",
      });
    }
  };
  const Function = ({ activeStartDate, date, view }) =>
    date.getDay() === ind[0] ||
    date.getDay() === ind[1] ||
    date.getDay() === ind[2] ||
    date.getDay() === ind[3] ||
    date.getDay() === ind[4] ||
    date.getDay() === ind[5] ||
    date.getDay() === ind[6];
  return (
    <div className="center">
      <h1 className="head">
        Prenez un Rendez-vous avec <br />
        <Link
          style={{ textDecoration: "none", textTransform: "uppercase" }}
          to={`/docprofile/${docDetail?._id}`}
        >
          dr {doc_name}
        </Link>
        <br />
        Spécialite en {specialite}
      </h1>
      <div className="container12 container col-md-12">
        <div className="form-outer">
          <form>
            <div className="page slide-page">
              <div className="field">
                <div className="label">
                  Nom {"&"} prénom du patient : &nbsp;
                  <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                </div>
                <input
                  type="text"
                  placeholder="Nom & prénom du patient"
                  value={client_name}
                  onChange={(e) => setcClient_name(e.target.value)}
                />
              </div>
              <div className="field">
                <div className="label">
                  Numéro du mobile du patient :{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                </div>
                <input
                  type="Number"
                  value={phone}
                  placeholder=" Numéro du mobile du patient"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="field">
                <button
                  className="firstNext next"
                  disabled={client_name && phone ? false : true}
                >
                  Suivant
                </button>
              </div>
            </div>
            <div className="page">
              <div className="field">
                <div className="label">
                  Genre : &nbsp;
                  <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                </div>
                <select onChange={(e) => setsexe(e.target.value)} value={sexe}>
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                </select>
              </div>
              <div className="field">
                <div className="label">
                  Date de naissance :{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                </div>
                <input
                  type="date"
                  value={datnaiss}
                  placeholder="Date de naissance"
                  onChange={(e) => setdatnaiss(e.target.value)}
                />
              </div>
              <div className="field btns">
                <button className="prev-1 prev">Précédent</button>
                <button className="next-1 next">Suivant</button>
              </div>
            </div>
            <div className="page">
              <div className="field1">
                <div className="label">
                  Choisir la date du rendez-vous :{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                </div>
                <div>
                  <Calendar
                    // calendarClassName="azz"
                    // tileContent={Function1}
                    className="azz"
                    tileDisabled={Function}
                    value={dat}
                    onChange={onChange}
                    // defaultValue={null}
                    minDate={new Date()}
                    defaultView="month"
                    // calendarType="ISO 8601"
                    // formatDay={(locale, date) =>
                    //   dayjs(date).format("YYYY-MM-DD")
                    // }
                    // activeStartDate ={new Date()}
                    // defaultActiveStartDate={new Date()}
                    // onActiveStartDateChange = {({ action, activeStartDate, value, view }) => alert('Changed view to: ', activeStartDate, view)}
                    // prev2Label="<<"
                    // formatLongDate={(locale, date) =>
                    //   dayjs(date).format("YYYY-MM-DD")
                    // }
                    showNavigation={true}
                    onClickMonth={false}
                    // onActiveStartDateChange={new Date()}
                    minDetail="month"
                    // view="decade"
                    // maxDetail="month"
                    nextAriaLabel=""
                    showNeighboringMonth={true}
                    showFixedNumberOfWeeks={true}
                    // required={true}
                  />
                  {/* <DatePicker onChange={onChange} value={date} /> */}
                  {/* <input
                    type="date"
                    onChange={(e) => onChange(e.target.value)}
                    // value={dat}
                  /> */}
                </div>
              </div>
              <div className="field btns">
                <button className="prev-2 prev">Précédent</button>
                <button className="next-2 next">Suivant</button>
              </div>
            </div>
            <div className="page">
              <div className="field">
                <div className="label">
                  Quelle est votre disponibilité ?:{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                </div>
                <select
                  onChange={(e) => setMode(e.target.value)}
                  placeholder="Model de voiture"
                >
                  <option>--- Choisir ---</option>
                  <option>Matin</option>
                  <option>Aprés midi</option>
                </select>
              </div>
              <div className="field">
                <div className="label">
                  Le motif de consultation (optionnel) :
                </div>
                <textarea
                  onChange={(e) => setMotif(e.target.value)}
                  placeholder="motif de consultation"
                ></textarea>
              </div>
              <div className="field btns">
                <button className="prev-3 prev">Précédent</button>
                <button onClick={handleSubmit}>Enregistrer</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RdvForm;
