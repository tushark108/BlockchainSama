import React from "react";
import userImage from "./images/Troll Face.png";
import bitcoin from "./images/bitcoin.gif";
import TredingTopics from "./TredingTopics";
import Cart from "./Cart";
import CartData from "./CartData"

export default function MainBox() {
  return (
    <div className="mainContainer">
      <div className="mainBoxContainer">
        <div className="mainBox">
          <h3 className="mainTitle">Getting started with Ethereum</h3>
          <h6 className="mainH6">
            Ethereum is a decentralized, open-source blockchain with smart
            contract functionality.
          </h6>
          <h6 className="mainH4">
            Ethereum is a technology that's home to digital money, global
            payments, and applications. The community has built a booming
            digital economy, bold new ways for creators to earn online, and so
            much more. It's open to everyone, wherever you are in the world –
            all you need is the internet.Today, billions of people... Read more
          </h6>

          <div className="reviewBox">
            <img src={userImage} alt="rahul" className="userimage" />
            <h6 className="userName">Rahul Shrirame - November 01, 2022</h6>
            <h6 className="readTime">4 min read</h6>
            <svg className="svg" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.3962 21.8912C1.07472 21.8912 0.766406 21.7635 0.539086 21.5362C0.311766 21.3088 0.18406 21.0005 0.18406 20.6791L0.00223895 2.90913C-0.0123569 2.54833 0.0445219 2.1882 0.169604 1.84947C0.294686 1.51073 0.485503 1.20006 0.73108 0.935333C0.976658 0.670606 1.27215 0.457041 1.60056 0.306922C1.92897 0.156804 2.28382 0.0730938 2.6447 0.0606068L14.2691 0C14.6304 0.00631138 14.987 0.0837495 15.3184 0.227891C15.6499 0.372032 15.9496 0.580053 16.2007 0.840072C16.4517 1.10009 16.649 1.40701 16.7814 1.74331C16.9137 2.0796 16.9786 2.43868 16.9722 2.80004L17.1419 20.57C17.1439 20.7824 17.0902 20.9916 16.9859 21.1767C16.8817 21.3618 16.7306 21.5162 16.5479 21.6245C16.3636 21.7309 16.1546 21.7869 15.9418 21.7869C15.7291 21.7869 15.52 21.7309 15.3358 21.6245L8.42659 17.7942L2.01439 21.7094C1.82451 21.8154 1.61326 21.8776 1.3962 21.8912ZM8.3781 15.1638C8.58873 15.1642 8.79632 15.214 8.98417 15.3093L14.6933 18.473L14.5479 2.77579C14.5479 2.53337 14.3903 2.36367 14.2933 2.37579L2.65682 2.48488C2.55985 2.48488 2.42651 2.64246 2.42651 2.88489L2.57197 18.5214L7.75991 15.3335C7.94833 15.2256 8.16101 15.1673 8.3781 15.1638Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="bitcoinGif">
          <img src={bitcoin} alt="bilcoinGif"></img>
        </div>
      </div>
      <div className="mainTrendingTopicsContainer">
        <TredingTopics />
      </div>
      <div>
        {CartData.map((data,index) => {
            return <Cart data={data} key={index} />
        })}
        
      </div>
    </div>
  );
}
