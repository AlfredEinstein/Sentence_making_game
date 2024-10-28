import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";

function Home() {
  const [message, setMessage] = useState("");
  const handleSuccess = (msg) => {
    setMessage({
      type: "success",
      txt: msg,
    });
  };
  const handleFailure = (msg) => {
    setMessage({
      type: "danger",
      txt: msg,
    });
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      {message && (
        <div className={`alert alert-${message.type}`}>{message.txt}</div>
      )}
      <div className="container px-2">
        <div className="row gy-6">
          <h3 className="p-5">Welcome to Sentence Making Game</h3>

          <h2>{localStorage.getItem("token") && <p>tokeen stored</p>}</h2>
        </div>

        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >
              Login
            </button>

            <div
              className="modal fade"
              id="login"
              data-bs-backdrop="static"
              data-bs-keyboard="true"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <Login onSuccess={handleSuccess} onFailure={handleFailure} />
            </div>
          </div>

          <div className="col">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#register"
            >
              Register
            </button>
            <div
              className="modal fade"
              id="register"
              data-bs-backdrop="static"
              data-bs-keyboard="true"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <Register onSuccess={handleSuccess} onFailure={handleFailure} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
