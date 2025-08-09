import React, { useState } from "react";
import "./Login.css";
import assests from "../../assets/assets";
const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");

  return (
    <div className="login">
      <img src={assests.logo_big} alt="" className="logo" />
      <form action="" className="login-form">
        <h2>{currentState}</h2>
        {currentState === "Sign up" ? (
          <input
            type="text"
            placeholder="username"
            required
            className="form-input"
          />
        ) : null}
        <input
          type="text"
          placeholder="Email address"
          requiredclassName="form-input"
        />
        <input
          type="text"
          placeholder="Password"
          requiredclassName="form-input"
        />
        <button type="submit" className="form-button">
          {currentState === "Sign up" ? "Create account" : "Login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Aggree to terms of use & privacy policy.</p>
        </div>
        <div className="login-forget">
          {currentState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrentState("Sign up")}>click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
