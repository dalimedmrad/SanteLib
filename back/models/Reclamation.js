const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reclamation_vousShema = new Schema({
  client_name: { type: String, required: true },
  client_id: { type: String, required: true },
  message: { type: String, required: true },
  object: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = rec = mongoose.model("rec", reclamation_vousShema);
