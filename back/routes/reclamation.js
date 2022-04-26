const express = require("express");
const router = express.Router();
const ctrls = require("../controllers/ReclCtrl")

router.post("/postrec", ctrls.addRecl);

router.get("/getallrec/",ctrls.getAllRecl);

router.delete("/deleterec/:id",ctrls.deleteOneRecl);

module.exports = router;
