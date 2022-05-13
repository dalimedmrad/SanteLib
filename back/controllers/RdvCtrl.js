const rdv = require("../models/Rendez-vous");

module.exports = {
  addRdv: async (req, res) => {
    // console.log(req.body);
    const {
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
    } = req.body;
    console.log(date);
    const date1 = new Date(date + " 03:00:00 GMT");
    console.log(date1);
    // const unixTimeZero = "Mon May 16 2022 03:00:00 GMT";
    // console.log(new Date(unixTimeZero));
    try {
      const newrdv = new rdv({
        client_id,
        doc_id,
        client_name,
        doc_name,
        phone,
        specialite,
        date1,
        mode,
        motif,
        datnaiss,
        sexe,
        emailPatient,
      });
      await newrdv.save();
      res.status(200).send({
        msg: "Chèr(e) Patient(e) votre RDV est bien reçu et en attente de confirmation de la part du docteur vous recevrez un SMS/email de notification dans les plus brefs délais.",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ msg: "Un erreur est produit réessayer plus tard" });
    }
  },
  getOneRdv: async (req, res) => {
    try {
      const result = await rdv.findOne({ _id: req.params.id });
      res.status(200).send({
        result: result,
        msg: `this is the rdv with this ${req.params.id}`,
      });
    } catch (error) {
      res
        .status(400)
        .send({ msg: `there is no rdv with this  ${req.params.id}` });
    }
  },
  getAllRdv: async (req, res) => {
    try {
      const result = await rdv.find();
      res.status(200).send({ result: result, msg: `this is all rdv ` });
    } catch (error) {
      res.status(400).send({ msg: `there is 0 rdv ` });
    }
  },
  deleteOneRdv: async (req, res) => {
    try {
      const result = await rdv.deleteOne({ _id: req.params.id });
      res
        .status(200)
        .send({ result: result, msg: `rdv with ${req.params.id} is deleted ` });
    } catch (error) {
      res
        .status(400)
        .send({ msg: `rdv with ${req.params.id} is not deleted ` });
    }
  },
  deleteAllRdv: async (req, res) => {
    try {
      const result = await rdv.deleteMany({});
      res.status(200).send({ result: result, msg: `all rdv deleted deleted ` });
    } catch (error) {
      res.status(400).send({ msg: "cant delete all rdv" });
    }
  },
  UpdateOneRdv: async (req, res) => {
    console.log(req.body);
    try {
      await rdv.updateOne({ _id: req.params.id }, { $set: req.body });
      res.status(200).send({
        msg: `Un SMS/e-mail de notification a été envoyé à ce patient `,
      });
    } catch (error) {
      res
        .status(400)
        .send({ msg: `Un erreur est produit réessayer plus tard` });
    }
  },
};
