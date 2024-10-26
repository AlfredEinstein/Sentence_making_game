import React from "react";
import PropTypes from "prop-types";
import "./Login.scss";
function Login(props) {
  return (
    <div className="modal-dialog modal-lg modal-centered">
   <div >
      <div className="modal-content">
        <div className="modal-header">
          <h5>Login</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-1 p-3">
              <label htmlFor="userEmail" className="form-label"> Email Address </label>
              <input type="email" className="form-control" id="userEmail" aria-describedby="mailHelp"/>
              <div id="mailHelp" className="form-text">Please Enter Your Registered Email</div>
            </div>
            <div className="mb-1 p-3">
              <label htmlFor="userPassword" className="form-label"> Password </label>
              <input type="password" className="form-control" id="userPassword" aria-describedby="passwordHelp"/>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="Submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
  );
}

Login.propTypes = {};

export default Login;
