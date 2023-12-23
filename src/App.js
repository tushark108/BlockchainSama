import "./App.css";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import { useState } from "react";
import Sidebar from "./Component/Sidebar";
import MainBox from "./Component/MainBox";
import SubscribePage from "./Component/SubscribePage";
import SuportLink from "./Component/SuportLink";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import AboutUs from "./Component/AboutUs";
import Contact from "./Component/Contact";
import News from "./Component/News";
import Register from "./Component/Register";

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [registerUser, setRegisterUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    interestedTopics: [],
    dob: "",
  });

  function getRegisterUser(event) {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name + " : "+value )
    if(name != "interestedTopics"){
    registerUser[name]=event.target.value}
    else{
    if(!registerUser[name].includes(value)){
        registerUser[name].push(value);
    }
    }
    
    setRegisterUser(registerUser);
  }
  function showRegisterUserDetails(event){
    event.preventDefault();
    console.log(registerUser);
  }
  function getUserInfo(event) {
    user[event.target.name] = event.target.value;
    setUser(user);
  }
  function checkLogin(event) {
    user.username === "tu.shark108" && user.password === "1234"
      ? window.alert("Login Successfully")
      : window.alert("Please check username or password");
    event.preventDefault();
  }

  function reset(event) {
    const reset = {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      interestedTopics: [],
      dob: "",
    }
    setRegisterUser(reset);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="mainSidebarContainer">
          <Sidebar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="mainMainboxContainer">
                <MainBox />
              </div>
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={
              <Login
                getUserInfo={getUserInfo}
                checkLogin={checkLogin}
                reset={reset}
                user={user}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                registerUser={registerUser}
                getRegisterUser={getRegisterUser}
                showRegisterUserDetails={showRegisterUserDetails}
                reset={reset}
              />
            }
          />
        </Routes>
      </div>
      <SubscribePage />
      <SuportLink />
    </BrowserRouter>
  );
}

export default App;
