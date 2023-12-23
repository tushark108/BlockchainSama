import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navMain">
      <div className="navContaint">
        <div className="projectName">
          <label>
            <b>Blockchain</b>
          </label>
          <label>Sama</label>
        </div>
        <div className="navItem">
          <Link to="/ " ><label className="item">Home</label></Link>
          <Link to="/news" ><label className="item">News</label></Link>
          <Link to="/aboutus" ><label className="item">About us</label></Link>
          <Link to="/contact" ><label className="item">Contact</label></Link>
          <Link to="/login" ><label className="item">Login</label></Link>
        </div>
      </div>
    </nav>
  );
}
