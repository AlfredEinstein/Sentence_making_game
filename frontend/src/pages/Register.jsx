import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import axiosInstance from "../Config/axiosInstance";
import apiServices from "../../apiServices";

function Register({onSuccess, onFailure}) {
  const [userData,setUserData]=useState({
    userName:"",
    userPassword:""
  });
  const [confirmPassword,setConfirmPassword]=useState();
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserData((prevdata)=>({
      ...prevdata,
      [name]:value,
    }));
  }
  const onSubmit=()=>{
    if(userData.userName && userData.userPassword){
      const sendUserData=async()=>{
        try{
          const userReg=await apiServices.registerUser(userData);
          onSuccess(userReg.data.message);
        }catch(err){
          console.log(err.response.data.message);
          onFailure(err.response.data.message);
        }
      }
      sendUserData();
    }
    else{
      return <div className="alert alert-danger">Fill all the fields</div>
    }
    
  }
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
              <label htmlFor="userName" className="form-label"> UserName </label>
              <input type="name" className="form-control" id="userName" value={userData.userName} name="userName" onChange={handleChange} aria-describedby="mailHelp"/>
              <div id="mailHelp" className="form-text">We will keep your details safe</div>
            </div>
            <div className="mb-1 p-3">
              <label htmlFor="newUserPassword" className="form-label"> Password </label>
              <input type="password" className="form-control" id="newUserPassword" aria-describedby="passwordHelp" name="userPassword" value={userData.userPassword} onChange={handleChange}/>
              <div id="passwordHelpBlock" class="form-text">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
              </div>
            </div>
            <div className="mb-1 p-3">
              <label htmlFor="Re-Password" className="form-label"> Confirm Password </label>
              <input type="password" className="form-control" id="Re-Password" aria-describedby="passwordHelp" name="confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </div>
            <div id="passwordHelp" className="form-text">
              <p className={`${userData.userPassword == confirmPassword ? 'visually-hidden':''}`}> password is not same </p>
              Please re-enter your password for confirmation.</div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="Submit" className="btn btn-primary" onClick={onSubmit} data-bs-dismiss="modal" disabled={!userData.userName || !userData.userPassword || userData.userPassword !== confirmPassword}>Submit</button>
        </div>
      </div>
    </div>
  </div>;
}

Register.propTypes = {};

export default Register;
