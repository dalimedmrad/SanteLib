import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import Calendar from "react-calendar";
import GroupIcon from "@material-ui/icons/Group";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./DoctorHome.css";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoctorHome = () => {
  const [st, setSt] = useState([]);
  const [st1, setSt1] = useState([]);
  const [st2, setSt2] = useState([]);
  const [st3, setSt3] = useState([]);
  const [st4, setSt4] = useState([]);
  const [st5, setSt5] = useState([]);
  const [setSt6] = useState([]);
  const [setSt7] = useState([]);
  const [list1, setList1] = useState([]);
  const [value, onChange] = useState(new Date());
  const user = useSelector((state) => state.userReducer.result);
  const isDoctor = localStorage.getItem("isDoctor");
  const docteurs = useSelector((state) => state.userReducer.Doc);
  const rdvs = useSelector((state) => state.rdvReducer.result);
  useEffect(() => {
    setSt(
      rdvs?.filter(
        (el) =>
          el.doc_id === user?._id &&
          el.approved === false &&
          el.isAnnuler === false &&
          el.isRefuser === false
      )
    );
    setSt1(
      rdvs?.filter(
        (el) =>
          el.doc_id === user?._id &&
          el.approved === true &&
          el.isAnnuler === true &&
          el.isRefuser === false
      )
    );
    setList1(
      rdvs?.filter(
        (el) =>
          el?.doc_id === user?._id &&
          el?.approved === true &&
          el?.isAnnuler === false &&
          el?.isRefuser === false
      )
    );
    setSt2(rdvs?.filter((el) => el.doc_id === user?._id));
    setSt3(list1?.filter((el) => el.sexe === "femme"));
    setSt4(list1?.filter((el) => el.sexe === "homme"));
    setSt5(
      rdvs?.filter(
        (el) =>
          el?.doc_id === user?._id &&
          el?.approved === false &&
          el?.isAnnuler === false &&
          el?.isRefuser === true
      )
    );
    setSt6(rdvs?.filter((el) => el.sexe === "homme"));
    setSt7(rdvs?.filter((el) => el.sexe === "femme"));
  }, [docteurs, rdvs, list1, user, setSt6, setSt7]);
  var data = {
    labels: ["Femme", "Homme"],
    datasets: [
      {
        data: [`${st3?.length}`, `${st4?.length}`],
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
  return (
    <div className="doctorhome">
      {user && isDoctor ? (
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
                      <h3>{st?.length}</h3>
                      <p>Demande de rendez-vous</p>
                    </div>
                    <div className="icon">
                      <EventAvailableIcon />
                    </div>
                    <a href="/docteur/demande-rdv" className="small-box-footer">
                      Plus d'informations{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{st1?.length}</h3>
                      <p>Rendez-vous annulés</p>
                    </div>
                    <div className="icon">
                      <EventAvailableIcon />
                    </div>
                    <a href="/rendez-vous/annuler" className="small-box-footer">
                      Plus d'informations{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>{list1?.length}</h3>
                      <p>Rendez-vous confirmés</p>
                    </div>
                    <div className="icon">
                      <GroupIcon />
                    </div>
                    <a
                      href="/docteur/list-rendez-vous"
                      className="small-box-footer"
                    >
                      Plus d'informations{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>{st5?.length}</h3>
                      <p>Rendez-vous refusés</p>
                    </div>
                    <div className="icon">
                      <EventAvailableIcon />
                    </div>
                    <a className="small-box-footer" href>
                      Plus d'informations{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 offset-md-3">
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>{st2?.length}</h3>
                      <p>Rendez-vous en total</p>
                    </div>
                    <div className="icon">
                      <EventAvailableIcon />
                    </div>
                    <a className="small-box-footer" href>
                      {/* Plus d'informations{" "} */}
                      <i className="fas" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <section className="col-lg-7 connectedSortable">
                  <div className="card">
                    <div className="card bg-gradient-success">
                      <div className="card-header border-1">
                        <h3 className="card-title">
                          <i className="far fa-calendar-alt" />
                          &nbsp;&nbsp; Calendar
                        </h3>
                        {/* tools card */}
                        <div className="card-tools">
                          <button
                            type="button"
                            className="btn btn-success btn-sm"
                            data-card-widget="collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          &nbsp;
                          <button
                            type="button"
                            className="btn btn-success btn-sm"
                            data-card-widget="remove"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      <div className="card-body pt-3">
                        <Calendar
                          className="cld"
                          onChange={onChange}
                          value={value}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card direct-chat direct-chat-primary">
                    <div className="card-header">
                      <h3 className="card-title">Direct Chat</h3>
                      <div className="card-tools">
                        <span
                          title="3 New Messages"
                          className="badge badge-primary"
                        >
                          3
                        </span>
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-tool"
                          title="Contacts"
                          data-widget="chat-pane-toggle"
                        >
                          <i className="fas fa-comments" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      {/*/.direct-chat-messages*/}
                      {/* Contacts are loaded here */}

                      {/* /.direct-chat-pane */}
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <form action="#" method="post">
                        <div className="input-group">
                          <input
                            type="text"
                            name="message"
                            placeholder="Type Message ..."
                            className="form-control"
                          />
                          <span className="input-group-append">
                            <button type="button" className="btn btn-primary">
                              Send
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                    {/* /.card-footer*/}
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="ion ion-clipboard mr-1" />
                        To Do List
                      </h3>
                      <div className="card-tools">
                        <ul className="pagination pagination-sm">
                          <li className="page-item">
                            <a className="page-link" href>«</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href>1</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href>2</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href>3</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href>»</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <ul className="todo-list" data-widget="todo-list">
                        <li>
                          {/* drag handle */}
                          <span className="handle">
                            <i className="fas fa-ellipsis-v" />
                            <i className="fas fa-ellipsis-v" />
                          </span>
                          {/* checkbox */}
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              defaultValue
                              name="todo1"
                              id="todoCheck1"
                            />
                            <label htmlFor="todoCheck1" />
                          </div>
                          {/* todo text */}
                          <span className="text">Design a nice theme</span>
                          {/* Emphasis label */}
                          <small className="badge badge-danger">
                            <i className="far fa-clock" /> 2 mins
                          </small>
                          {/* General tools such as edit or delete*/}
                          <div className="tools">
                            <i className="fas fa-edit" />
                            <i className="fas fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fas fa-ellipsis-v" />
                            <i className="fas fa-ellipsis-v" />
                          </span>
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              defaultValue
                              name="todo2"
                              id="todoCheck2"
                              defaultChecked
                            />
                            <label htmlFor="todoCheck2" />
                          </div>
                          <span className="text">
                            Make the theme responsive
                          </span>
                          <small className="badge badge-info">
                            <i className="far fa-clock" /> 4 hours
                          </small>
                          <div className="tools">
                            <i className="fas fa-edit" />
                            <i className="fas fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fas fa-ellipsis-v" />
                            <i className="fas fa-ellipsis-v" />
                          </span>
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              defaultValue
                              name="todo3"
                              id="todoCheck3"
                            />
                            <label htmlFor="todoCheck3" />
                          </div>
                          <span className="text">
                            Let theme shine like a star
                          </span>
                          <small className="badge badge-warning">
                            <i className="far fa-clock" /> 1 day
                          </small>
                          <div className="tools">
                            <i className="fas fa-edit" />
                            <i className="fas fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fas fa-ellipsis-v" />
                            <i className="fas fa-ellipsis-v" />
                          </span>
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              defaultValue
                              name="todo4"
                              id="todoCheck4"
                            />
                            <label htmlFor="todoCheck4" />
                          </div>
                          <span className="text">
                            Let theme shine like a star
                          </span>
                          <small className="badge badge-success">
                            <i className="far fa-clock" /> 3 days
                          </small>
                          <div className="tools">
                            <i className="fas fa-edit" />
                            <i className="fas fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fas fa-ellipsis-v" />
                            <i className="fas fa-ellipsis-v" />
                          </span>
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              defaultValue
                              name="todo5"
                              id="todoCheck5"
                            />
                            <label htmlFor="todoCheck5" />
                          </div>
                          <span className="text">
                            Check your messages and notifications
                          </span>
                          <small className="badge badge-primary">
                            <i className="far fa-clock" /> 1 week
                          </small>
                          <div className="tools">
                            <i className="fas fa-edit" />
                            <i className="fas fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fas fa-ellipsis-v" />
                            <i className="fas fa-ellipsis-v" />
                          </span>
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              defaultValue
                              name="todo6"
                              id="todoCheck6"
                            />
                            <label htmlFor="todoCheck6" />
                          </div>
                          <span className="text">
                            Let theme shine like a star
                          </span>
                          <small className="badge badge-secondary">
                            <i className="far fa-clock" /> 1 month
                          </small>
                          <div className="tools">
                            <i className="fas fa-edit" />
                            <i className="fas fa-trash-o" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer clearfix">
                      <button
                        type="button"
                        className="btn btn-primary float-right"
                      >
                        <i className="fas fa-plus" /> Add item
                      </button>
                    </div>
                  </div>
                </section>
                <section className="col-lg-5 connectedSortable">
                  <div className="card bg-gradient">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="fas fa-th mr-1" />
                        Statistiques sur les rendez-vous confirmés
                      </h3>
                    </div>
                    <div className="card-body">
                      <Doughnut data={data} height={400} options={options} />
                    </div>
                    <div className="card-footer bg-transparent"></div>
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
export default DoctorHome;
