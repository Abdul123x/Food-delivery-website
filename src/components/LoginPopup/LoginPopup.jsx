import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>
          {currentState === "sign Up" ? "create account" : "login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing i agree the terms and conditions</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account? <span onClick={()=>setCurrentState("sign Up")}>click here</span>
          </p>
        ) : (
          <p>
            already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
