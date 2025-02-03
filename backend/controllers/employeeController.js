 
const Employee = require("../models/Employee");

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error fetching employees" });
  }
};

exports.addEmployee = async (req, res) => {
  try {
    const { name, seniority } = req.body;
    console.log("name : ",name," seniority : ",seniority)
    const employee = new Employee({ name, seniority });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    console.log("error : ",error)
    res.status(500).json({ message: "Error adding employee" });
  }
};
