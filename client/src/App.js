import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import PrivateRoute from "./components/route/PrivateRoute";
import Navi from "./components/navbar/Navbar";
import {
  currentUser,
  getallclients,
  getalldoctors,
} from "./Redux/actions/user";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import "./components/Cards/Cards";
import FormProfile from "./components/FormProfile";
import Home from "./pages/home/Home";
import GetallDoctors from "./pages/doctorpages/listDocToDoc/GetallDoctors";
import Docfilters from "./pages/recherchePage/Docfilters";
import DocProfile from "./pages/docprofile/DocProfile";
import RdvForm from "./pages/rdvForm/RdvForm";
// import Chat from "./components/Chat";
import AdminDashboard from "./pages/Adminpages/listdoctors/AdminDashboard";
import AdminRoute from "./components/route/AdminRoute";
import ReportForm from "./pages/reclamaPage/ReportForm";
import AdminReport from "./pages/Adminpages/Allreclamation/AdminReport";
import AdminClient from "./pages/Adminpages/listclients/AdminClient";
import AdminRdv from "./pages/Adminpages/allrendevous/AdminRdv";
import ScrollTop from "./components/scroll/ScrollTop";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import AdminHome from "./pages/Adminpages/adminhome/AdminHome";
import { getallrdv } from "./Redux/actions/rdv";
import ProfileAdmin from "./pages/profile/ProfileAdmin";
import MesRdv from "./pages/mesrdv/MesRdv";
import Menu from "./components/menu/Menu";
import SignUpDoc from "./pages/Signupdoc/SignUpDoc";
import ForgetPassword from "./pages/forgetpassword/ForgotPassword";
import DoctorRoute from "./components/route/DoctorRoute";
import DoctorHome from "./pages/doctorpages/doctorhom/DoctorHome";
import NouveauDocs from "./pages/Adminpages/listdoctors/NouveauDocs";
import MesPatients from "./pages/doctorpages/allpatients/MesPatients";
import ProfileDoc from "./pages/doctorpages/profileDoc/ProfileDoc";
import { getallrec } from "./Redux/actions/rec";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import PrivateRoute1 from "./components/route/PrivateRoute1";
import ListRdv from "./pages/doctorpages/listrdv/ListRdv";
import DemandeRdv from "./pages/doctorpages/demandeRdv/DemandeRdv";
import RdvAnnuler from "./pages/doctorpages/rdvAnnuler/RdvAnnuler";
import PageError from "./pages/pageError/PageError";
import AccountActivation from "./pages/Signup/ActiveAccount";
import VerificationEmail from "./pages/Signupdoc/VerificationEmail";
const App = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const isDoctor = localStorage.getItem("isDoctor");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (token) {
      dispatch(currentUser());
    }
    dispatch(getallrdv());
    dispatch(getallclients());
    dispatch(getalldoctors());
    dispatch(getallrec());
  }, []);
  return (
    <div>
      <Navi
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      {!isAdmin ? (
        <Menu
          show={show}
          setShow={setShow}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      ) : null}
      {isAdmin || isDoctor ? <Sidebar /> : null}
      <ScrollTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/filter" element={<Docfilters />} />
        <Route path="/docprofile/:id" element={<DocProfile />} />
        <Route path="/motdepasseoublier" element={<ForgetPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />

        <Route path="*" element={<PageError />} />

        <Route element={<PrivateRoute1 />}>
          <Route path="/connexion" element={<Signup />} />
          <Route path="/inscription/particien" element={<SignUpDoc />} />
          <Route path="/activercompte/:token" element={<AccountActivation />} />
          <Route
            path="/verifieradressemail/:token"
            element={<VerificationEmail />}
          />
        </Route>
        {/* <Route path="/chat" component={Chat} /> */}
        <Route element={<AdminRoute />}>
          <Route path="/admin/docteurs/conv" element={<AdminDashboard />} />
          <Route path="/admin/docteurs/nonconv" element={<NouveauDocs />} />
          <Route path="/adminrdv" element={<AdminRdv />} />
          <Route path="/adminreport" element={<AdminReport />} />
          <Route path="/adminclient" element={<AdminClient />} />
          <Route path="/admin/acceuil" element={<AdminHome />} />
        </Route>
        <Route element={<DoctorRoute />}>
          <Route path="/docteur/acceuil" element={<DoctorHome />} />
          <Route path="/docteur/mes-patients" element={<MesPatients />} />
          <Route path="/docteur/mon-profile" element={<ProfileDoc />} />
          <Route path="/docteur/list-rendez-vous" element={<ListRdv />} />
          <Route path="/docteur/demande-rdv" element={<DemandeRdv />} />
          <Route path="/docteur/rendez-vous/annuler" element={<RdvAnnuler />} />
        </Route>
        <Route element={<DoctorRoute />}>
          <Route path="/docteurs" element={<GetallDoctors />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/mon-profile" element={<ProfileAdmin />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/editprofile" element={<FormProfile />} /> */}
          <Route path="/prener-rdv" element={<RdvForm />} />
          <Route path="/rec" element={<ReportForm />} />
          <Route path="/mes-rendez-vous" element={<MesRdv />} />
          <Route path="/modifier/mot-de-passe" element={<UpdatePassword />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
