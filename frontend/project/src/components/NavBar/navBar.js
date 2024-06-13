import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mainNavbarContainer">
      <div className="headingAndLogin">
        <h1 className="h1text">LeaveApplication</h1>
        <Link to="/login">
          <button className="loginBtn">Login</button>
        </Link>
        <Link to="/leave-form">
          <button className="loginBtn">Leave Form</button>
        </Link>
        <Link to="/">
          <button className="loginBtn">Leave Status</button>
        </Link>
      </div>
      <button className="loggoutBtn">Loggout</button>
    </div>
  );
};

export default NavBar;
