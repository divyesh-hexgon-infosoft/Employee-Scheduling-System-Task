import { useNavigate } from "react-router-dom";
import ShiftForm from "../components/ShiftForm";
import ShiftList from "../components/ShiftList";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate("/addEmployee");
  };

  const handleListEmployee = () => {
    navigate("/listEmployee");
  };
  return (
    <div className="container mx-auto p-4">
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={handleAddEmployee}
      >
        Add Employee
      </button>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={handleListEmployee}
      >
        List Employee
      </button>
      <h1 className="text-2xl font-bold mb-4">Employee Scheduler</h1>
      <ShiftForm />

      <ShiftList />
    </div>
  );
};

export default Dashboard;
