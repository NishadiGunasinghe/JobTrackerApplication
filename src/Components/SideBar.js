import React from "react";
import { NavLink } from "react-router-dom";
import "../asserts/styles/SideBar.css";

export default ({ toggleMenu }) => (
  <div className="sidemenu">
    <button className="closeBtn" onClick={toggleMenu}>
      ✕
    </button>
    <div className="profileCard">
      <h4 className="cardTitle">Job Tracker</h4>
    </div>
    <NavLink className="navLink" to="/TrackApplication" onClick={toggleMenu}>
      Home
    </NavLink>
    <NavLink className="navLink" to="/CreateApplicationForm" onClick={toggleMenu}>
      Create Application Form
    </NavLink>
    <NavLink className="navLink" to="/TrackApplication" onClick={toggleMenu}>
      Track Application
    </NavLink>
  </div>
);
