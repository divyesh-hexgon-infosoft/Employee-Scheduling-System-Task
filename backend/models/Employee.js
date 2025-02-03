 
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  seniority: { type: Number, required: true }, // Higher number = more senior
});

module.exports = mongoose.model("Employee", EmployeeSchema);
