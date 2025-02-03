 
const Shift = require("../models/Shift");
const { checkConflict, assignShift } = require("../utils/shiftAssignment");

exports.getShifts = async (req, res) => {
  try {
    const shifts = await Shift.find().populate("employeeId");
    res.json(shifts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching shifts" });
  }
};

exports.addShift = async (req, res) => {
  try {
    const { employeeId, startTime, endTime, priority } = req.body;

    // Check for conflicts
    const conflict = await checkConflict(employeeId, startTime, endTime);
    if (conflict) {
      return res.status(400).json({ error: "Conflict detected", conflictingShift: conflict });
    }

    // Create and assign shift
    const shift = new Shift({ employeeId, startTime, endTime, priority, assigned: false });
    await shift.save();

    // Assign shift based on priority & seniority
    await assignShift();

    res.status(201).json({ message: "Shift submitted successfully", shift });
  } catch (error) {
    res.status(500).json({ message: "Error submitting shift" });
  }
};
