const user = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

module.exports = {
  register: async (req, res) => {
    const { name, lastName, email, password, phone, role, sexe, isAuth } =
      req.body;
    try {
      const newUser = new user({
        name,
        lastName,
        email,
        password,
        phone,
        sexe,
        isAuth,
        role,
      });

      // check if the email exist
      const searchedUser = await user.findOne({ email });
      if (searchedUser) {
        return res
          .status(400)
          .send({ msg: "cette adresse email est déjà utilisé !" });
      }
      // hash password
      const saltRounds = 10;
      const genSalt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, genSalt);
      console.log(hashedPassword);
      newUser.password = hashedPassword;

      // save the user
      let result = await newUser.save();

      // generate a token
      const paylaod = {
        _id: result._id,
        name: result.name,
      };
      const token = await jwt.sign(paylaod, process.env.SECRET_KEY);
      res.status(200).send({
        result: newUser,
        msg: "user is saved ",
        token: `Bearer ${token}`,
      });
    } catch (error) {
      res.status(500).send("cannot save the user");
    }
  },
  register1: async (req, res) => {
    const {
      name,
      lastName,
      email,
      password,
      phone,
      phone1,
      addressecab,
      specialite,
      ville,
      role,
      sexe,
      image,
      image1,
      image2,
      horaire,
      duree,
      datnaiss,
      isAuth,
    } = req.body;
    try {
      const newUser = new user({
        name,
        lastName,
        email,
        password,
        phone,
        phone1,
        addressecab,
        specialite,
        ville,
        role,
        sexe,
        image,
        image1,
        image2,
        horaire,
        duree,
        datnaiss,
        isAuth,
      });
      // check if the email exist
      const searchedUser = await user.findOne({ email });
      if (searchedUser) {
        return res
          .status(400)
          .send({ msg: "Cet adresse émail est déjà utilisée" });
      }
      // hash password
      const saltRounds = 10;
      const genSalt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, genSalt);
      newUser.password = hashedPassword;

      // save the user
      let result = await newUser.save();
      res.status(200).send({
        msg: "Merci de choisir notre platforme chère docteur vous allez recevoir un mail,d'activation lors le la confirmation de votre identité",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("cannot save the user");
    }
  },
  update: async (req, res) => {
    try {
      const result = await user.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.status(200).send({
        result: result,
        msg: `Votre profil a été modifié`,
      });
    } catch (error) {
      res
        .status(400)
        .send({ msg: `doctor with ${req.params.id} is not updated ` });
    }
  },
  delete: async (req, res) => {
    try {
      let result = await user.deleteOne({ _id: req.params.id });
      res.status(200).send({
        result: result,
        msg: `doctor with ${req.params.id} is deleted `,
      });
    } catch (error) {
      res
        .status(400)
        .send({ msg: `doctor with ${req.params.id} is not deleted ` });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      // find if the user exist
      const searchedUser = await user.findOne({ email });
      // if the email not exist
      if (!searchedUser) {
        return res
          .status(400)
          .send({ msg: "Email et/ou mot de passe invalides" });
      }
      // password are equal
      const match = await bcrypt.compare(password, searchedUser.password);
      if (!match) {
        return res
          .status(400)
          .send({ msg: "Email et/ou mot de passe invalides" });
      }
      if (searchedUser.isAuth === false && searchedUser.isDoctor === false) {
        return res.status(400).send({ msg: "Votre compte a été desactivé" });
      }

      // cree token
      const paylaod = {
        _id: searchedUser._id,
        name: searchedUser.name,
      };
      const token = await jwt.sign(paylaod, process.env.SECRET_KEY);

      // send the user
      res
        .status(200)
        .send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });
    } catch (error) {
      res.status(500).send({ msg: "cannot get the user" });
    }
  },
  getAllDoctors: async (req, res) => {
    try {
      const result = await user.find({ role: "particien" });
      res.status(200).send({ result: result, msg: `this is all Doctor ` });
    } catch (error) {
      res.status(400).send({ msg: `there is 0 doctor` });
      console.log(error);
    }
  },
  getAllPatients: async (req, res) => {
    try {
      let result = await user.find({ role: "patient" });
      res.status(200).send({ result: result, msg: `this is all client ` });
    } catch (error) {
      res.status(400).send({ msg: `there is 0 client` });
    }
  },
  updatePassword: async (req, res) => {
    try {
      const User = await user.findById(req.body.id).select("+password");
      const isPasswordMatched = await User.comparePassword(
        req.body.oldPassword
      );
      if (!isPasswordMatched) {
        return res
          .status(400)
          .send({ msg: "Ancien mot de passe est incorrect" });
      }
      if (req.body.newPassword !== req.body.confirmPassword) {
        return res
          .status(400)
          .send({ msg: "Le deux mot de passe ne sont pas identiques" });
      }
      const saltRounds = 10;
      const genSalt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(req.body.newPassword, genSalt);
      User.password = hashedPassword;
      await User.save();
      res
        .status(200)
        .send({ msg: "Votre mot de passe a été modifié", user: User });
    } catch (error) {
      console.log(error);
    }
  },
  // Forgot Password
  forgotPassword: async (req, res) => {
    const User = await user.findOne({ email: req.body.email });
    try {
      if (!User) {
        return res
          .status(404)
          .send({ msg: "Cette adresse email n'existe pas !" });
      }

      // Get ResetPassword Token
      const resetToken = await User.getResetPasswordToken();
      await User.save({ validateBeforeSave: false });
      const sante = `http://localhost:3000/`;
      const resetPasswordUrl = `${req.protocol}://localhost:3000/password/reset/${resetToken}`;
      const message = `Bonjour,
      
      Une personne a demandé un lien pour changer le mot de passe de ce compte. Utilisez cette adresse :- \n\n ${resetPasswordUrl} \n\n
      
      Si vous n'avez pas effectué cette demande, merci d'ignorer ce message.
      Votre mot de passe ne sera modifié que si vous cliquez sur ce lien et effectuez la modification.

      Cordialement,
      \n\n ${sante} \n\n
      `;

      await sendEmail({
        email: User.email,
        subject: "Bienvenue sur SantéLib.tn",
        message,
      });

      // res.status(200).json({
      //   success: true,
      //   message: `Email sent to ${User.email} successfully`,
      // });
      return res.status(200).send({
        msg: "Vous recevrez un email pour changer votre mot de passe",
      });
    } catch (error) {
      User.resetPasswordToken = undefined;
      User.resetPasswordExpire = undefined;
      console.log(error);

      await User.save({ validateBeforeSave: false });
    }
  },
  // Reset Password
  resetPassword: async (req, res, next) => {
    // creating token hash
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const User = await user.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!User) {
      res
        .status(400)
        .send({ msg: "Reset Password Token is invalid or has been expired" });
    }

    if (req.body.password !== req.body.confirmPassword) {
      res.status(400).send({ msg: "Password does not match" });
    }

    const saltRounds = 10;
    const genSalt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password, genSalt);

    User.password = hashedPassword;
    User.resetPasswordToken = undefined;
    User.resetPasswordExpire = undefined;

    await User.save();

    // sendToken(user, 200, res);
  },
  getOneById: async (req, res) => {
    // console.log(req.params.id);
    try {
      const result = await user.findOne({ _id: req.params.id });
      res.status(200).send({
        result: result,
      });
      // console.log(result);
    } catch (error) {
      res
        .status(400)
        .send({ msg: `there is no doctor with this  ${req.params.id}` });
    }
  },
  currentUser: (req, res) => {
    res.status(200).send({ user: req.user });
  },
};
