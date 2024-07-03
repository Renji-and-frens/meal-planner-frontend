import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPwd, setShowPwd] = useState(false);

  const toggleShowPwd = () => {
    setShowPwd(!showPwd);
  };

  return (
    <form method="POST">
      <p className="login-field">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" required placeholder="Example@email.com" />
      </p>

      <p className="login-field">
        <label htmlFor="pwd">Password</label>
        <br />
        <div className="pwd-container">
          <input 
            type={showPwd ? "text" : "password"}
            id="pwd" 
            required 
            placeholder="At least 8 characters"
          />
          <p id="show-pwd" onClick={toggleShowPwd}>
            {showPwd ? "Hide" : "Show"}
          </p>
        </div>
      </p>

      <Link to="" id="forgot">Forgot Password?</Link>
      <br />

      <input type="submit" value="Log in" className="center"/>
    </form>
  );
};

export default LoginForm;
