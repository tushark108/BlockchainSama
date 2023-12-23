import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="sidebarContainer">
        <div className="search">
          <input className="searchBox" type="text" placeholder="Serach" />
          {/* <div class="search-icon">&#128269;</div> */}
        </div>
        <label className="topic">Topics</label>
        <label className="line">___________________</label>
        <div className="topicContainer">
          <select id="topicList" name="topicList">
            <option value="Ethereum">Ethereum</option>
            <option value="Mining">Mining</option>
            <option value="Nonce">Nonce</option>
            <option value="Ether">Ether</option>
          </select>
          <label>NFT</label>
          <label>WEB 3.0</label>
          <label>Smart Contact</label>
          <select id="topicList" name="topicList">
            <option value="Bitcoin">Bitcoin</option>
            <option value="Mining">Mining</option>
            <option value="Nonce">Nonce</option>
            <option value="Ether">Ether</option>
          </select>
          <label>Cryptocurrency</label>
          <select id="topicList" name="topicList">
            <option value="Metaverse">Metaverse</option>
            <option value="Mining">Mining</option>
            <option value="Nonce">Nonce</option>
            <option value="Ether">Ether</option>
          </select>
          <select id="topicList" name="topicList">
            <option value="Hashing">Hashing</option>
            <option value="Mining">Mining</option>
            <option value="Nonce">Nonce</option>
            <option value="Ether">Ether</option>
          </select>
        </div>
      </div>
    </>
  );
}
