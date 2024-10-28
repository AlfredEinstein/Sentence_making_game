import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <button className="btn btn-primary" type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Dashboard;
