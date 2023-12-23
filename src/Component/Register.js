import React from "react";

export default function Register(props) {
  return (
    <form>
      <div className="registerContainer">
        <div className="mainTextDetail">
          <div className="textDetail">
            <label>First Name: </label>
            <input
              className="nameBox"
              placeholder="Enter First Name"
              name="firstName"
              onChange={(e) => props.getRegisterUser(e)}
            />
          </div>
          <div className="textDetail">
            <label>Last Name: </label>
            <input
              className="nameBox"
              placeholder="Enter Last Name"
              name="lastName"
              onChange={(e) => props.getRegisterUser(e)}
            />
          </div>
          <div className="textDetail">
            <label>Email: </label>
            <input
              className="nameBox1"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => props.getRegisterUser(e)}
            />
          </div>
        </div>
        <div className="genderDetail">
          <label>
            Gender :
            <input
              className="gDetail"
              type="radio"
              name="gender"
              value="Male"
              onClick={(e) => props.getRegisterUser(e)}
            ></input>{" "}
            Male
            <input
              className="gDetail"
              type="radio"
              name="gender"
              value="Female"
              onClick={(e) => props.getRegisterUser(e)}
            ></input>{" "}
            Female
          </label>
        </div>
        <div className="interesteDetails">
          <label>Select intersted Topic :</label>
          <div className="mainInterestDetails">
            <div>
              <input
                type="checkbox"
                name="interestedTopics"
                value="Blockchain"
                onClick={(e) => props.getRegisterUser(e)}
              ></input>{" "}
              Blockchain
            </div>
            <div>
              <input
                type="checkbox"
                name="interestedTopics"
                value="Cryptocurrency"
                onClick={(e) => props.getRegisterUser(e)}
              ></input>{" "}
              Cryptocurrency
            </div>
            <div>
              <input
                type="checkbox"
                name="interestedTopics"
                value="Metaverse"
                onClick={(e) => props.getRegisterUser(e)}
              ></input>{" "}
              Metaverse
            </div>
          </div>
        </div>
        <div className="dobDetail">
          <label>
            Select DOB :{" "}
            <input
              className="nameBox"
              type="date"
              name="dob"
              onChange={(e) => props.getRegisterUser(e)}
            ></input>
          </label>
        </div>
        <div className="registerDiv">
          <button className="LoginButton1" onClick={props.showRegisterUserDetails}>Register</button>
          <button type="button" className="LoginButton1" onClick={props.reset}>Reset</button>
        </div>
      </div>
    </form>
  );
}
