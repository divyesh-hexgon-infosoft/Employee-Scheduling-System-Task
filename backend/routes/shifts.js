 
const express = require("express");
const { getShifts, addShift } = require("../controllers/shiftController");

const router = express.Router();

router.get("/", getShifts);
router.post("/", addShift);

module.exports = router;
