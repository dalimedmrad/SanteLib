const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const rendez_vousShema = new Schema({
  client_name: { type: String },
  doc_name: { type: String },
  client_id: { type: String },
  doc_id: { type: String },
  date1: { type: String },
  motif:{type:String},
  mode:{type:String},
  heure:{type:String},
  approved: { type: Boolean, default: false },
  specialite: { type: String },
  phone: { type: String },
  emailPatient:{type:String},
  isAnnuler: { type: Boolean, default: false },

});

module.exports = rdv = mongoose.model("rdv", rendez_vousShema);
