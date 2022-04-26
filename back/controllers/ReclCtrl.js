const rec = require("../models/Reclamation");

module.exports = {
  addRecl: async (req, res) => {
    const { client_name, client_id, message, object, email } = req.body;

    const newrec = new rec({ client_name, client_id, message, object, email });

    try {
      let result = await newrec.save();
      res
        .status(200)
        .send({ result: result, msg: "Votre message a été envoyé" });
    } catch (error) {
      res.status(400).send({ msg: "rec is not added" });
    }
  },
  getAllRecl: async (req, res) => {
    try {
      let result = await rec.find();
      res.status(200).send({ result: result, msg: `this is all rec ` });
    } catch (error) {
      res.status(400).send({ msg: `there is 0 rec` });
    }
  },
  deleteOneRecl: async (req, res) => {
    try {
      let result = await rec.deleteOne({ _id: req.params.id });
      res
        .status(200)
        .send({ result: result, msg: `rec with ${req.params.id} is deleted ` });
    } catch (error) {
      res
        .status(400)
        .send({ msg: `rec with ${req.params.id} is not deleted ` });
    }
  },
};
