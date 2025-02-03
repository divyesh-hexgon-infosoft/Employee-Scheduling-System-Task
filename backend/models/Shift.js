 
const mongoose = require("mongoose");

const ShiftSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  priority: { type: Number, required: true, enum: [1, 2, 3] }, // 1 = High, 2 = Medium, 3 = Low
  assigned: { type: Boolean, default: false }, // Whether shift has been assigned
});

module.exports = mongoose.model("Shift", ShiftSchema);
