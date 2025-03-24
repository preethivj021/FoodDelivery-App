import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="cross"
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" ? 
            <input type="text" placeholder="Your name" required />
           : 
            <></>
          }
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
          <button>
            {currentState === "Sign Up" ? "Create Account" : "Login"}
          </button>
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>By continuing, i agree with the terms of use & Privacy Policy</p>
        </div>
        {currentState === "Sign Up"
         ? 
          <p>
            Already have an account ?
            <span onClick={() => setCurrentState("Login")}> Login </span>
          </p>
         : 
          <p>
            Create a new account ?
            <span onClick={() => setCurrentState("Sign Up")}> Click me</span>
          </p>
        }
      </form>
    </div>
  );
};

export default LoginPopup;
