import React from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  return (
    <form onSubmit={props.checkLogin} className="mainLoginBox">
    <div className="loginContainer">
      <div className="loginItem">
        <div>
          <label className="item">Username: </label>
          <input type="text" placeholder="Enter Username" name="username" onChange={(e) => props.getUserInfo(e)}></input>
        </div>
        <div className="passwordRow">
          <label className="item">Password  : </label>
          <input type="text" placeholder="Enter Passowrd" name="password"  onChange={(e) => props.getUserInfo(e)}></input>
        </div>
      </div>
      <div className="LoginButton">
        <button className="LoginButton1">Login</button>
        <button type="button" className="LoginButton1" onClick={props.reset}>Reset</button>
      </div>
      <div className="registerNow">
        are you new user ? <Link to="/register">register now</Link>
      </div>
    </div>
    </form>
  );
}
