import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import MessageWindow from "./pages/MessageWindow";
import Register from "./pages/Register";

function App() {
  return (
    <div className="container px-2">
      <div className="row gy-6">
        <h3 className="p-5">Welcome to Sentence Making Game</h3>
      </div>
      
      <div className="row">
        <div className="col">
        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#login">
        Login
        </button>
        <div className="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <Login/>   
        </div>
        </div>
        <div className="col">
        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#register">
        Register
        </button>
        <div className="modal fade" id="register" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <Register/>
        </div>
        </div>
      </div>
    </div>
);
}

export default App;
