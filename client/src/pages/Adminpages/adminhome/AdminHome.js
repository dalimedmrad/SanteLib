import React, { useEffect, useState } from "react";
import "./adminhome.css";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import Calendar from "react-calendar";
import GroupIcon from "@material-ui/icons/Group";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const useStyles = makeStyles({
  table: {
    minWidth: 150,
    maxWidth: 150,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const AdminHome = () => {
  const classes = useStyles();
  const [st, setSt] = useState([]);
  const [st1, setSt1] = useState([]);
  const [st2, setSt2] = useState([]);
  const [st3, setSt3] = useState([]);
  const [st4, setSt4] = useState([]);
  const [st5, setSt5] = useState([]);
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
        // label: [`${st.length}`,`${st1.length}`],
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
        // label: [`${st.length}`,`${st1.length}`],
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
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
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
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
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
                      More info <i className="fas fa-arrow-circle-right" />
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
                      More info <i className="fas fa-arrow-circle-right" />
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
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <section className="col-lg-7 connectedSortable">
                  <div className="card">
                    <TableContainer component={Paper}>
                      <Table
                        className={classes.table}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">
                              Protein&nbsp;(g)
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">
                                {row.calories}
                              </TableCell>
                              <TableCell align="right">{row.fat}</TableCell>
                              <TableCell align="right">{row.carbs}</TableCell>
                              <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
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
                      {/* Conversations are loaded here */}
                      <div className="direct-chat-messages">
                        {/* Message. Default to the left */}
                        <div className="direct-chat-msg">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-left">
                              Alexander Pierce
                            </span>
                            <span className="direct-chat-timestamp float-right">
                              23 Jan 2:00 pm
                            </span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img
                            className="direct-chat-img"
                            src="dist/img/user1-128x128.jpg"
                            alt="message user image"
                          />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            Is this template really for free? That's
                            unbelievable!
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message to the right */}
                        <div className="direct-chat-msg right">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-right">
                              Sarah Bullock
                            </span>
                            <span className="direct-chat-timestamp float-left">
                              23 Jan 2:05 pm
                            </span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img
                            className="direct-chat-img"
                            src="dist/img/user3-128x128.jpg"
                            alt="message user image"
                          />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            You better believe it!
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message. Default to the left */}
                        <div className="direct-chat-msg">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-left">
                              Alexander Pierce
                            </span>
                            <span className="direct-chat-timestamp float-right">
                              23 Jan 5:37 pm
                            </span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img
                            className="direct-chat-img"
                            src="dist/img/user1-128x128.jpg"
                            alt="message user image"
                          />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            Working with AdminLTE on a great new app! Wanna
                            join?
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message to the right */}
                        <div className="direct-chat-msg right">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-right">
                              Sarah Bullock
                            </span>
                            <span className="direct-chat-timestamp float-left">
                              23 Jan 6:10 pm
                            </span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img
                            className="direct-chat-img"
                            src="dist/img/user3-128x128.jpg"
                            alt="message user image"
                          />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            I would love to.
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                      </div>
                      {/*/.direct-chat-messages*/}
                      {/* Contacts are loaded here */}
                      <div className="direct-chat-contacts">
                        <ul className="contacts-list">
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="dist/img/user1-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Count Dracula
                                  <small className="contacts-list-date float-right">
                                    2/28/2015
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  How have you been? I was...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="dist/img/user7-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Sarah Doe
                                  <small className="contacts-list-date float-right">
                                    2/23/2015
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  I will be waiting for...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="dist/img/user3-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Nadia Jolie
                                  <small className="contacts-list-date float-right">
                                    2/20/2015
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  I'll call you back at...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="dist/img/user5-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Nora S. Vans
                                  <small className="contacts-list-date float-right">
                                    2/10/2015
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  Where is your new...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="dist/img/user6-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  John K.
                                  <small className="contacts-list-date float-right">
                                    1/27/2015
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  Can I take a look at...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="dist/img/user8-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Kenneth M.
                                  <small className="contacts-list-date float-right">
                                    1/4/2015
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  Never mind I found...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                        </ul>
                        {/* /.contacts-list */}
                      </div>
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
                            <a href="#" className="page-link">
                              «
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              »
                            </a>
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
                  <div className="card bg-gradient-primary">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="fas fa-th mr-1" />
                        Statistiques sur les patients confirmés
                      </h3>
                    </div>
                    <div className="card-body">
                      {/* <TableContainer component={Paper}>
                        <Table
                          className={classes.table}
                          aria-label="simple table"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell align="right">Homme</TableCell>
                              <TableCell align="right">Femme</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell component="th" scope="row">
                                {nbrclh}
                              </TableCell>
                              <TableCell align="right">{nbrclf}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer> */}
                      <Doughnut data={data} height={400} options={options} />
                    </div>
                    <div className="card-footer bg-transparent"></div>
                  </div>
                  <div className="card bg-gradient-info">
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
