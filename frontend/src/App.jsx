import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddEmployeePage from "./pages/addEmployee";
import EmployeeListPage from "./pages/EmployeeListPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addEmployee" element={<AddEmployeePage />} />
        <Route path="/listEmployee" element={<EmployeeListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
