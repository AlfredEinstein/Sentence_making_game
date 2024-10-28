import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token", "userName");
    navigate("/");
  };
  useEffect(() => {
    if (!token || !userName) {
      navigate("/");
    }
  }, [token, userName]);
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-1">
            <li className="nav-item">
              <a className="nav-link active" aria-current="Dashboard">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="GamePage">Game</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleLogout} style={{cursor:"pointer"}}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  </div>
  )
}

export default Navbar