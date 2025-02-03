import EmployeeList from "../components/EmployeeList";

const EmployeeListPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Employee List</h1>
      <EmployeeList />
    </div>
  );
};

export default EmployeeListPage; 