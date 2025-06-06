import React from "react";
import { NavLink } from "react-router-dom";
import "../asserts/styles/SideBar.css";


// const styles = {
//   sidemenu: {
//     backgroundColor: "#092561",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     height: "100vh",
//     width: "250px",
//     padding: "1rem",
//     boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
//     zIndex: 1000,
//   },
//   closeBtn: {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     fontSize: "1.5rem",
//     cursor: "pointer",
//     background: "none",
//     border: "none",
//   },
//   profileCard: {
//     marginTop: "2.5rem",
//     marginBottom: "1rem",
//     padding: "1rem",    
//   },
//   cardTitle: {
//     color: "#1569b3",
//     fontSize: "2.25rem",
//     marginTop: "0.5rem",
//     fontFamily: "cursive"
//   },
//   navLink: {
//     display: "block",
//     marginTop: "1rem",
//     color: "#1569b3",
//     textDecoration: "none",
//     fontSize: "1.3rem",
//     paddingLeft: "1rem",
//     fontFamily: "cursive"
//   },
  
// }

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
