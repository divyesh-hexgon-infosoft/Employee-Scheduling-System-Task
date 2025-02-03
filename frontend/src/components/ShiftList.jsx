import { useEffect, useState } from "react";
import { getShifts } from "../api/api";

const ShiftList = () => {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    fetchShifts();
  }, []);

  const fetchShifts = async () => {
    const { data } = await getShifts();
    setShifts(data);
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-3">Assigned Shifts</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Employee</th>
            <th className="border p-2">Start Time</th>
            <th className="border p-2">End Time</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((shift) => (
            <tr key={shift._id}>
              <td className="border p-2">{shift.employeeId.name}</td>
              <td className="border p-2">{new Date(shift.startTime).toLocaleString()}</td>
              <td className="border p-2">{new Date(shift.endTime).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShiftList;
