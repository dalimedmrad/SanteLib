const express = require("express");
const rdv = require("../models/Rendez-vous");

module.exports = {
  addRdv: async (req, res) => {
    const {
      client_name,
      doc_name,
      client_id,
      doc_id,
      phone,
      specialite,
      motif,
      mode,
      date,
    } = req.body;
    try {
      const newrdv = new rdv({
        client_name,
        doc_name,
        client_id,
        doc_id,
        date,
        phone,
        specialite,
        motif,
        mode,
      });
      let result = await newrdv.save();
      res
        .status(200)
        .send({
          msg: "Chèr(e) Patient(e) votre RDV est bien reçu et en attente de confirmation de la part du praticien vous recevrez un SMS/mail de notification dans les plus brefs délais.",
        });
    } catch (error) {
      res.status(500).send("rdv not posted");
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
    try {
      const result = await rdv.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res
        .status(200)
        .send({
          msg: `Un sms/email de notification a été envoyé à ce patient `,
        });
    } catch (error) {
      res
        .status(400)
        .send({ msg: `doctor with ${req.params.id} is not approved ` });
    }
  },
};
