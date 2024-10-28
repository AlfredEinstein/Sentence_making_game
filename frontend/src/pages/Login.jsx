import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.scss";
import apiServices from "../../apiServices";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userName: "",
    userPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    const userLogin = async () => {
      try {
        console.log(userData);
        const login = await apiServices.userLogin(userData);
        localStorage.setItem("token", login.data.jwtToken);
        props.onSuccess(login.data.message);
        navigate("/Dashboard");
      } catch (error) {
        props.onFailure(error.response?.data?.message || "An error occurred.");
      }
    };

    userLogin(); // Ensure this is called immediately
  };
  return (
    <div className="modal-dialog modal-lg modal-centered">
      <div>
        <div className="modal-content">
          <div className="modal-header">
            <h5>Login</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-1 p-3">
                <label htmlFor="Name" className="form-label">
                  {" "}
                  Email Address{" "}
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="Name"
                  aria-describedby="mailHelp"
                  value={userData.userName}
                  name="userName"
                  onChange={handleChange}
                />
                <div id="mailHelp" className="form-text">
                  Please Enter Your Registered User Name
                </div>
              </div>
              <div className="mb-1 p-3">
                <label htmlFor="userPassword" className="form-label">
                  {" "}
                  Password{" "}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="userPassword"
                  aria-describedby="passwordHelp"
                  value={userData.userPassword}
                  name="userPassword"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              type="Submit"
              data-bs-dismiss="modal"
              disabled={!userData.userName || !userData.userPassword}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

export default Login;
