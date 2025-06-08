// File: src/App.jsx
import React, { useEffect, useState } from "react";
import axios from "./axios"; // this should point to src/axios.js

import EmployeeList from "./pages/EmployeeList";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/user") // No need to hardcode full URL
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google?prompt=select_account";

  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Management System</h1>
      {!user ? (
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login with Google
        </button>
      ) : (
        <>
          <p className="mb-4">Welcome, {user}</p>
          <EmployeeList />
        </>
      )}
    </div>
  );
}

export default App;
