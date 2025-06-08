// File: src/pages/EmployeeList.jsx
import React, { useEffect, useState } from "react";
import axios from "../axios"; // adjust path if needed

import EmployeeForm from "../components/EmployeeForm";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const fetchEmployees = () => {
    axios
      .get("http://localhost:8080/api/employees", { withCredentials: true })
      .then((res) => setEmployees(res.data));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/employees/${id}`, {
        withCredentials: true,
      })
      .then(() => fetchEmployees());
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  return (
    <div>
      <EmployeeForm onSuccess={fetchEmployees} editing={editingEmployee} />
      <h2 className="text-xl font-semibold mt-4">Employee List</h2>
      <ul className="mt-2 space-y-2">
        {employees.map((emp) => (
          <li key={emp.id} className="border p-2 rounded">
            <div>
              {emp.name} ({emp.department}) — {emp.role} — ₹{emp.salary}
            </div>
            <div className="space-x-2 mt-2">
              <button
                onClick={() => handleEdit(emp)}
                className="bg-yellow-400 px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(emp.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;