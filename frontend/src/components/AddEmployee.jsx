import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../api/api";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    seniority: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployee(formData);
      setMessage("Employee added successfully!");
      setError("");
      setFormData({ name: "", seniority: "" });
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Error adding employee";
      setError(errorMessage);
      setMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg relative">
      
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Employee</h2>
      {error && <p className="text-red-600 bg-red-100 p-2 rounded mb-3">{error}</p>}
      {message && <p className="text-green-600 bg-green-100 p-2 rounded mb-3">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Employee Name" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          onChange={handleChange} 
          value={formData.name}
          required 
        />
        <input 
          type="text" 
          name="seniority" 
          placeholder="Seniority" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          onChange={handleChange} 
          value={formData.seniority}
          required 
        />
        <div className="flex justify-between">
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Submit
          </button>
          <button 
            type="button" 
            className="ml-2 w-full bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition duration-300"
            onClick={() => navigate('/')}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
