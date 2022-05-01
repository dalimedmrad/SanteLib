const express = require("express");
const router = express.Router();
const ctrls = require("../controllers/UserCtrl");
const {
  loginRules,
  registerRules,
  registerparticienRules,
  validation,
  updateRules,
  updatepassword,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");
const sendEmail = require("../utils/sendEmail");
const User = require("../models/User");

// register
router.post("/register", registerRules(), validation, ctrls.register);
router.post("/register1", validation, ctrls.register1);

// update
router.put("/updateadminrole/:id", ctrls.updateAdminRole);
router.put("/update/:id", ctrls.updateprofile);
router.put("/update1/:id", updateRules(), validation, ctrls.updateprofileDoc);
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
  const user = await User.findOne({ email });
  if (!user) {
    res.send({ msg: "User not found" });
  }
  try {
    await sendEmail({
      email: user.email,
      subject: "Bienvenue sur SantéLib.tn",
      message,
    });

    res.send({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/password/forgot", ctrls.forgotPassword);
router.put("/password/reset/:token", ctrls.resetPassword);

module.exports = router;
