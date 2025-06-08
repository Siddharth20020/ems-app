import React, { useState, useEffect } from "react";
import axios from "../axios"; // This points to your axios.js instance

function EmployeeForm({ onSuccess, editing }) {
  const [form, setForm] = useState({
    name: "",
    department: "",
    role: "",
    salary: "",
  });

  useEffect(() => {
    if (editing) {
      setForm(editing);
    }
  }, [editing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = form.id ? "put" : "post";
    const url = form.id ? `/api/employees/${form.id}` : "/api/employees";

    axios[method](url, form)
      .then(() => {
        setForm({ name: "", department: "", role: "", salary: "" });
        onSuccess();
      })
      .catch((err) => {
        console.error("Error saving employee:", err);
        alert("Failed to save employee. Check console for details.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      <h3 className="text-lg font-semibold">
        {form.id ? "Edit" : "Add"} Employee
      </h3>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="border px-2 py-1 rounded w-full"
        required
      />
      <input
        name="department"
        value={form.department}
        onChange={handleChange}
        placeholder="Department"
        className="border px-2 py-1 rounded w-full"
        required
      />
      <input
        name="role"
        value={form.role}
        onChange={handleChange}
        placeholder="Role"
        className="border px-2 py-1 rounded w-full"
        required
      />
      <input
        name="salary"
        type="number"
        value={form.salary}
        onChange={handleChange}
        placeholder="Salary"
        className="border px-2 py-1 rounded w-full"
        required
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {form.id ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default EmployeeForm;
