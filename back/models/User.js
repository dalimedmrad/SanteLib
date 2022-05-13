const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const userShema = new Schema({
  name: { type: String },
  lastName: { type: String },
  specialite: { type: String },
  email: { type: String },
  phone: { type: String },
  phone1: { type: String },
  password: { type: String },
  addressecab: { type: String },
  datnaiss: { type: String },
  sexe: { type: String },
  duree: { type: String },
  ville: { type: String },
  role: { type: String },
  image: { type: String },
  image1: { type: String },
  image2: { type: String },
  horaire: { type: Array },
  nbr: { type: Number },
  position: [],
  // isAdmin: { type: Boolean, default: false },
  isDoctor: { type: Boolean, default: false },
  isAuth: { type: Boolean },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
// userShema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
// });
// Compare Password
userShema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generating Password Reset Token
userShema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");
  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = user = mongoose.model("user", userShema);
