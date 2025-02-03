 
const Shift = require("../models/Shift");
const Employee = require("../models/Employee");

// Check if shift conflicts with existing shifts
exports.checkConflict = async (employeeId, startTime, endTime) => {
  const existingShifts = await Shift.find({ employeeId });

  for (const shift of existingShifts) {
    if (
      (new Date(startTime) < new Date(shift.endTime)) &&
      (new Date(endTime) > new Date(shift.startTime))
    ) {
      return shift;
    }
  }
  return null;
};

// Assign shifts based on priority & seniority
exports.assignShift = async () => {
  const shifts = await Shift.find({ assigned: false }).sort({ priority: 1 });

  for (const shift of shifts) {
    const employee = await Employee.findById(shift.employeeId);
    if (!employee) continue;

    // Check for conflict
    const conflict = await this.checkConflict(employee._id, shift.startTime, shift.endTime);
    if (!conflict) {
      shift.assigned = true;
      await shift.save();
    }
  }
};
