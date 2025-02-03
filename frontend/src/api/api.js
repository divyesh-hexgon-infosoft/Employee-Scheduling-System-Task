import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getEmployees = async () => axios.get(`${API_BASE_URL}/employees`);
export const getShifts = async () => axios.get(`${API_BASE_URL}/shifts`);
export const submitShift = async (shiftData) => axios.post(`${API_BASE_URL}/shifts`, shiftData);
export const addEmployee = async (employeeData) => axios.post(`${API_BASE_URL}/employees`, employeeData);
