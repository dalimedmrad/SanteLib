const express = require("express");
const router = express.Router();
const ctrls = require("../controllers/RdvCtrl");

router.post("/postrdv",ctrls.addRdv);

// get one rdv
router.get("/:id", ctrls.getOneRdv);

// get all rdv
router.get("/", ctrls.getAllRdv);

// delete
router.delete("/delete/:id", ctrls.deleteOneRdv);

// delete all
router.delete("/delete", ctrls.deleteAllRdv);

// update
router.put("/update/:id", ctrls.UpdateOneRdv);

module.exports = router;
