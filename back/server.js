const express = require("express");
require("dotenv").config();
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const router = express.Router();
require("./connectDb")();
const app = express();
const fileUpload = require("express-fileupload");
const corsOptions = {
  origin: "https://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
const options = {
  key: fs.readFileSync("./localhost-key.pem"), // Replace with the path to your key
  cert: fs.readFileSync("./localhost.pem"), // Replace with the path to your certificate
};
router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
});
app.use(fileUpload({ useTempFiles: true }));
app.use(express.json());
app.use("/api/user", require("./routes/User"));
app.use("/api/rdv", require("./routes/rdv"));
app.use("/api/rec", require("./routes/reclamation"));
app.use("/", require("./routes/Upload"));
app.use("/api/send", require("./routes/sms"));

https.createServer(options, app).listen(process.env.PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`server is running on port ${process.env.PORT}`);
});
