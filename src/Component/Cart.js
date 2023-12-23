import React from "react";
import vector from "./images/Vector.png";

export default function Cart(props) {
  return (
    <div className="mainCartContainer">
    <div className="cartContainer">
      <img className="blockchainImg" src={props.data.imgPath} alt="blockchainimg"></img>
      <label className="cartTitle" >{props.data.title}</label>
      <div className="cartReading">
        <h6 className="cartReadingTime" >{props.data.readtime}</h6>
        <img className="vector" src={vector} alt="verctorimg" />
      </div>
    </div>
    </div>
  );
}
