const express = require("express");
const router = express.Router();
const ctrls = require("../controllers/UserCtrl");
const {
  loginRules,
  // registerRules,
  registerparticienRules,
  validation,
  updateRules,
  updatepassword,
  updateRulesDoc,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");
const { mailTransport } = require("../utils/sendEmail");
const User = require("../models/User");

// register
router.post("/register", ctrls.register);
router.post("/verify", ctrls.saveuser);
router.post(
  "/register1",
  registerparticienRules(),
  validation,
  ctrls.register1
);
router.post("/verify1", ctrls.saveuser1);

// update
router.put("/updateadminrole/:id", ctrls.updateAdminRole);
router.put("/update/:id", updateRules(), validation, ctrls.updateprofile);
router.put(
  "/update1/:id",
  updateRulesDoc(),
  validation,
  ctrls.updateprofileDoc
);
router.put("/password/update", updatepassword(), ctrls.updatePassword);

// delete
router.delete("/delete/:id", ctrls.delete);

// login
router.post("/login", loginRules(), validation, ctrls.login);

// get one
router.get("/getonedoctor/:id", ctrls.getOneById);

// get all doctors
router.get("/alldoctors", ctrls.getAllDoctors);

// get all clients
router.get("/allClients", ctrls.getAllPatients);

// search
router.get("/search/byspes/:spes", ctrls.searchByspeciality);
router.get("/search/byville/:reg", ctrls.searchByVille);
router.get("/search/bytow/:spes/:reg", ctrls.searchByVilleandspeciality);

router.get("/current", isAuth(), ctrls.currentUser);

router.post("/sendmail", async (req, res) => {
  const { message, email } = req.body;
  console.log(message, email);
  // const user = await User.findOne({ email });
  // if (!user) {
  //   res.send({ msg: "User not found" });
  // }
  try {
    await mailTransport().sendMail({
      to: email,
      subject: "Bienvenue sur SantéLib.tn",
      html: `<h2>${message}</h2>`,
    });

    res.send({
      success: true,
      // message: `Email sent to ${email} successfully`,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/password/forgot", ctrls.forgotPassword);
router.put("/password/reset/:token", ctrls.resetPassword);

module.exports = router;
