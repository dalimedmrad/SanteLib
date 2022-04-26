import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../../Redux/actions/user";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ReportForm from "../ReportForm";
import Offcanvas from "react-bootstrap/Offcanvas";
import './Navbar.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function ButtonAppBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const profilename = useSelector((state) => state.userReducer.result);
  const isAuth1 = useSelector((state) => state.userReducer.isAuth);
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          <Link to={"/"}>ACCEUIL</Link>,
          "QUI SOMME NOUS ",
          "NOUS CONTACTER",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    //     <div className={classes.root}>
    //       <AppBar
    //         style={{ backgroundColor: "#329D9C", color: "white" }}
    //         position="static"
    //       >
    //         <Toolbar>
    //           {/* {["≡"].map((anchor) => (
    //             <React.Fragment key={anchor}>
    //               <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
    //               <Drawer
    //                 anchor={anchor}
    //                 open={state[anchor]}
    //                 onClose={toggleDrawer(anchor, false)}
    //               >
    //                 {list(anchor)}
    //               </Drawer>
    //             </React.Fragment>
    //           ))} */}

    //           <Typography variant="h5" className={classes.title}>
    //             <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
    //               <LocalHospitalIcon /> SanteLib
    //             </Link>
    //           </Typography>
    //           {/* <div style={{display:'flex',justifyContent:"space-between"}}> */}

    //           {profilename && profilename.isAdmin ? (
    //             <Typography variant="h5" className={classes.title}>
    //               <Link
    //                 style={{ color: "white", textDecoration: "none" }}
    //                 to={"/admindashboard"}
    //               >
    //                 All Doctors
    //               </Link>
    //             </Typography>
    //           ) : null}

    // {profilename && profilename.isAdmin ? (
    //             <Typography variant="h5" className={classes.title}>
    //               <Link
    //                 style={{ color: "white", textDecoration: "none" }}
    //                 to={"/adminclient"}
    //               >
    //                 All Clients
    //               </Link>
    //             </Typography>
    //           ) : null}

    // {profilename && profilename.isAdmin ? (
    //             <Typography variant="h5" className={classes.title}>
    //               <Link
    //                 style={{ color: "white", textDecoration: "none" }}
    //                 to={"/adminrdv"}
    //               >
    //                 All Rdv
    //               </Link>
    //             </Typography>
    //           ) : null}

    // {profilename && profilename.isAdmin ? (
    //             <Typography variant="h5" className={classes.title}>
    //               <Link
    //                 style={{ color: "white", textDecoration: "none" }}
    //                 to={"/adminreport"}
    //               >
    //                 All Reports
    //               </Link>
    //             </Typography>
    //           ) : null}

    //           <Typography variant="h5" className={classes.title}>
    //             <Link
    //               style={{ color: "white", textDecoration: "none" }}
    //               to={"/alldoctors"}
    //             >
    //               Medecins
    //             </Link>
    //           </Typography>

    //           <Typography variant="h5" className={classes.title}>
    //             <Link
    //               style={{ color: "white", textDecoration: "none" }}
    //               to={"/chat"}
    //             >
    //               Chatting
    //             </Link>
    //           </Typography>
    //           {/* </div> */}
    //           <Typography variant="h5" className={classes.title}></Typography>
    //           {isAuth1 && profilename ? (
    //             <Link
    //               style={{ color: "white", textDecoration: "none" }}
    //               to={"/dashboard"}
    //             >
    //               <DropdownButton
    //                 border="light"
    //                 variant="light"
    //                 id="dropdown-item-button"
    //                 // title={`${profilename.name} ${profilename.lastName}`}
    //               >
    //                 <Dropdown.Item
    //                   as="button"
    //                   onClick={() => {
    //                     dispatch(logOut());
    //                     history.push("/");
    //                   }}
    //                 >
    //                   LOG OUT
    //                 </Dropdown.Item>
    //                 {!profilename.isAdmin?<Link to={"/rec"}>
    //                   <Dropdown.Item as="button">Report to Admin</Dropdown.Item>
    //                 </Link>:null}
    //               </DropdownButton>
    //             </Link>
    //           ) : (
    //             <Link
    //               style={{ color: "white", textDecoration: "none" }}
    //               to={"/signup"}
    //             >
    //               <Button color="inherit">Se Connecter</Button>
    //             </Link>
    //           )}
    //         </Toolbar>
    //       </AppBar>
    //     </div>
    <section
      data-bs-version="5.1"
      className="menu menu1 cid-sOnyjK30Hb"
      once="menu"
      id="menu1-0"
    >
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <Link to="/">
                {/* <img
                  src={process.env.PUBLIC_URL + "logo1.png"}

                  // style={{ height: "5.5rem" }}
                /> */}
              </Link>
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span />
              <span />
              <span />
              <span />
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav nav-dropdown nav-right"
              data-app-modern-menu="true"
            >
              {!profilename?.isAdmin ? (
                <Link to="/">
                  <li className="nav-item">
                    <a className="nav-link link text-black display-4">
                      <span className="mobi-mbri mobi-mbri-home mbr-iconfont mbr-iconfont-btn" />
                      Home
                      <br />
                    </a>
                  </li>
                </Link>
              ) : null}
              {profilename ? (
                <div>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link link text-black dropdown-toggle show display-4"
                      data-toggle="dropdown-submenu"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      <span className="mobi-mbri mobi-mbri-user-2 mbr-iconfont mbr-iconfont-btn" />
                    </a>
                    <div
                      className="dropdown-menu show"
                      aria-labelledby="dropdown-undefined"
                      data-bs-popper="none"
                    >
                      <Link to="/dashboard">
                        <a className="text-black dropdown-item display-4">
                          <span className="mobi-mbri mobi-mbri-edit mbr-iconfont mbr-iconfont-btn" />
                          Profile
                        </a>
                      </Link>

                      <a
                        className="text-black show dropdown-item display-4"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                        onClick={() => {
                          dispatch(logOut());
                          history.push("/");
                        }}
                      >
                        <span className="mobi-mbri mobi-mbri-logout mbr-iconfont mbr-iconfont-btn" />
                        Log out
                      </a>
                    </div>
                  </li>
                </div>
              ) : (
                <div>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link link text-black dropdown-toggle show display-4"
                      data-toggle="dropdown-submenu"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      <span className="mobi-mbri mobi-mbri-user-2 mbr-iconfont mbr-iconfont-btn" />
                    </a>
                    <div
                      className="dropdown-menu show"
                      aria-labelledby="dropdown-undefined"
                      data-bs-popper="none"
                    >
                      <Link to="/signup">
                        <a className="text-black dropdown-item display-4">
                          <span className="mobi-mbri mobi-mbri-edit mbr-iconfont mbr-iconfont-btn" />
                          Sign In
                        </a>
                      </Link>
                    </div>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
