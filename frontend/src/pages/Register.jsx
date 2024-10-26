import React from "react";
import PropTypes from "prop-types";

function Register(props) {

  return <div className="modal-dialog modal-lg">
   <div >
      <div className="modal-content">
        <div className="modal-header">
          <h5>Register</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="container modal-body">
          <form>
            <div className="mb-1 p-3">
              <label htmlFor="userEmail" className="form-label"> Email Address </label>
              <input type="email" className="form-control" id="userEmail" aria-describedby="mailHelp"/>
              <div id="mailHelp" className="form-text">We will keep your details safe</div>
            </div>
            <div className="mb-1 p-3">
              <label htmlFor="userPassword" className="form-label"> Password </label>
              <input type="password" className="form-control" id="userPassword" aria-describedby="passwordHelp"/>
              <div id="passwordHelpBlock" class="form-text">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
              </div>
            </div>
            <div className="mb-1 p-3">
              <label htmlFor="Re-Password" className="form-label"> Confirm Password </label>
              <input type="password" className="form-control" id="Re-Password" aria-describedby="passwordHelp"/>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="Submit">Submit</button>
        </div>
      </div>
    </div>
  </div>;
}

Register.propTypes = {};

export default Register;
