import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";

function Dashboard() {
  const navigate = useNavigate();
  const [currentComponet, setComponent] = useState(<Home />);
  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("token");
  const components = [
    {
      key: "1",
      name: "Home",
      item: <Home />,
      active: true,
    },
    {
      key: "2",
      name: "Game",
      item: <Game />,
      active: false,
    },
  ];
  const [navComponents, setNavComponents] = useState(components);

  const handleComponentChange = (component) => {
    setComponent(component.item);

    // Update the active status of the components
    setNavComponents((prevComponents) =>
      prevComponents.map((comp) =>
        comp.key === component.key
          ? { ...comp, active: true }
          : { ...comp, active: false }
      )
    );
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
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
              {navComponents.map((component) => (
                <li className="nav-item" key={component.key}>
                  <a
                    className={`nav-link ${component.active ? "active" : ""}`}
                    onClick={() => handleComponentChange(component)}
                    style={{ cursor: "pointer" }}
                  >
                    {component.name}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: "85vh" }}>{currentComponet}</div>
    </div>
  );
}

export default Dashboard;
