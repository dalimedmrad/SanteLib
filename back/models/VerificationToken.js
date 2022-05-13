const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const verificationTokenSchema = new Schema({
  token: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
// verificationTokenSchema.pre("save", async function (next) {
//   if (this.isModified("token")) {
//     const hash = await bcrypt.hash(this.token, 8);
//     this.token = hash;
//   }
//   next();
// });
// Compare Password
verificationTokenSchema.methods.compareToken = async function (token) {
  const result = await bcrypt.compare(token, this.token);
  return result;
};

module.exports = VerificationToken = mongoose.model(
  "VerificationToken",
  verificationTokenSchema
);
