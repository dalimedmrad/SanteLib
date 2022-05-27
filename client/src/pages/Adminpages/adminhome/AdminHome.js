import React, { useEffect, useState } from "react";
import "./adminhome.css";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import Calendar from "react-calendar";
import GroupIcon from "@material-ui/icons/Group";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const AdminHome = () => {
  const [st, setSt] = useState([]);
  const [st1, setSt1] = useState([]);
  const [st2, setSt2] = useState([]);
  const [st3, setSt3] = useState([]);
  const [st4, setSt4] = useState([]);
  const [st5, setSt5] = useState([]);
  const [st6, setSt6] = useState([]);
  const [st7, setSt7] = useState([]);
  const [value, onChange] = useState(new Date());
  const user = useSelector((state) => state.userReducer.result);
  const isAdmin = localStorage.getItem("isAdmin");
  const docteurs = useSelector((state) => state.userReducer.Doc);
  const clients = useSelector((state) => state.userReducer.client);
  const rdvs = useSelector((state) => state.rdvReducer.result);
  const clms = useSelector((state) => state.recReducer.result);

  // const nbrdocs = () => {
  //   var idocs = 0;
  //   for (let i = 0; i < docteurs?.length; i++) {
  //     idocs += 1;
  //   }
  //   return idocs;
  // };
  // const idocs = nbrdocs();

  // const nbrclients = () => {
  //   var idocs = 0;
  //   for (let i = 0; i < clients?.length; i++) {
  //     idocs += 1;
  //   }
  //   return idocs;
  // };
  // const iclients = nbrclients();

  // const nbrrdv = () => {
  //   var idocs = 0;
  //   for (let i = 0; i < rdvs?.length; i++) {
  //     idocs += 1;
  //   }
  //   return idocs;
  // };
  // const irdvs = nbrrdv();

  // const nbrclms = () => {
  //   var idocs = 0;
  //   for (let i = 0; i < clms?.length; i++) {
  //     idocs += 1;
  //   }
  //   return idocs;
  // };
  // const iclms = nbrclms();
  useEffect(() => {
    setSt(clients?.filter((el) => el.sexe === "homme" && el.isAuth === true));
    setSt1(clients?.filter((el) => el.sexe === "femme" && el.isAuth === true));
    setSt2(
      docteurs?.filter((el) => el.isDoctor === true && el.sexe === "homme")
    );
    setSt3(
      docteurs?.filter((el) => el.isDoctor === true && el.sexe === "femme")
    );
    setSt4(docteurs?.filter((el) => el.isDoctor === true));
    setSt5(docteurs?.filter((el) => el.isDoctor === false));
    setSt6(rdvs?.filter((el) => el.sexe === "homme"));
    setSt7(rdvs?.filter((el) => el.sexe === "femme"));
  }, [clients, docteurs, rdvs, clms]);
  // const nbrclH = () => {
  //   var idocs = 0;
  //   for (let i = 0; i < st?.length; i++) {
  //     idocs += 1;
  //   }
  //   return idocs;
  // };
  // const nbrclh = nbrclH();
  // const nbrclF = () => {
  //   var idocs = 0;
  //   for (let i = 0; i < st1?.length; i++) {
  //     idocs += 1;
  //   }
  //   return idocs;
  // };
  // const nbrclf = nbrclF();
  var data = {
    labels: ["Homme", "Femme"],
    datasets: [
      {
        data: [`${st.length}`, `${st1.length}`],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 30,
      },
    },
  };
  var data1 = {
    labels: ["Homme", "Femme"],
    datasets: [
      {
        data: [`${st2.length}`, `${st3.length}`],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  var options1 = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 30,
      },
    },
  };
  var data2 = {
    labels: ["Homme", "Femme"],
    datasets: [
      {
        data: [`${st6?.length}`, `${st7?.length}`],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  var options2 = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 30,
      },
    },
  };
  return (
    <div className="adminhome">
      {user && isAdmin ? (
        <div className="content-wrapper adminhome1">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Tableau de bord</h1>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              <div className="row col-md-12">
                <div className="col-md-3">
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{st4.length}</h3>
                      <p>Docteurs confirmés</p>
                    </div>
                    <div className="icon">
                      <GroupIcon />
                    </div>
                    <a href="/admin/docteurs/conv" className="small-box-footer">
                      Plus d'informations{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{st5.length}</h3>
                      <p>Docteurs non confirmés</p>
                    </div>
                    <div className="icon">
                      <GroupIcon />
                    </div>
                    <a
                      href="/admin/docteurs/nonconv"
                      className="small-box-footer"
                    >
                      Plus d'informations{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>{clients?.length}</h3>
                      <p>Patients</p>
                    </div>
                    <div className="icon">
                      <GroupIcon />
                    </div>
                    <a href="/adminclient" className="small-box-footer">
                      Plus d'informations{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* <div className="col-md-2">
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>{iclients}</h3>
                      <p>Patients</p>
                    </div>
                    <div className="icon">
                      <GroupIcon />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div> */}
                <div className="col-md-2">
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>{rdvs?.length}</h3>
                      <p>Rendez-vous</p>
                    </div>
                    <div className="icon">
                      <EventAvailableIcon />
                    </div>
                    <a href="#" className="small-box-footer">
                      {" "}
                      <i className="fas " />
                    </a>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>{clms?.length}</h3>
                      <p>Reclamations</p>
                    </div>
                    <div className="icon">
                      <FeedbackIcon />
                    </div>
                    <a href="/adminreport" className="small-box-footer">
                      Plus d'informations{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <section className="col-lg-7 connectedSortable">
                  <div className="card bg-gradient">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="fas fa-th mr-1" />
                        Statistiques sur les rendez-vous
                      </h3>
                    </div>
                    <div className="card-body">
                      <Doughnut data={data2} height={400} options={options2} />
                    </div>
                  </div>
                  <div className="card bg-gradient">
                    <div className="card-header">
                      <h3 className="card-title">
                        <h3 className="card-title">
                          <i className="far fa-calendar-alt" />
                          &nbsp;&nbsp; Calendrier
                        </h3>
                      </h3>
                      <div className="card-tools"></div>
                    </div>

                    <div className="card-body">
                      <Calendar
                        className="cld"
                        onChange={onChange}
                        value={value}
                      />
                    </div>

                    <div className="card-footer"></div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="ion ion-clipboard mr-1" />
                      </h3>
                      <div className="card-tools"></div>
                    </div>

                    <div className="card-body"></div>

                    <div className="card-footer clearfix"></div>
                  </div>
                </section>
                <section className="col-lg-5 connectedSortable">
                  <div className="card bg-gradient">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="fas fa-th mr-1" />
                        Statistiques sur les patients confirmés
                      </h3>
                    </div>
                    <div className="card-body">
                      <Doughnut data={data} height={400} options={options} />
                    </div>
                    <div className="card-footer bg-transparent"></div>
                  </div>
                  <div className="card bg-gradient">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="fas fa-th mr-1" />
                        Statistiques sur les particiens confirmés
                      </h3>
                    </div>
                    <div className="card-body">
                      <Doughnut data={data1} height={400} options={options1} />
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer bg-transparent">
                      <div className="row">{/* ./col */}</div>
                      {/* /.row */}
                    </div>
                    {/* /.card-footer */}
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AdminHome;
