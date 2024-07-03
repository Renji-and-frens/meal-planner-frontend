import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [showPwd, setShowPwd] = useState(false);

  const toggleShowPwd = () => {
    setShowPwd(!showPwd);
  };

  return (
    <form method="POST">
      <p className="signup-field">
        <label htmlFor="name">Full Name</label>
        <br />
        <input type="text" id="name" required placeholder="John Doe" />
      </p>

      <p className="signup-field">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" required placeholder="Enter your Email here" />
      </p>

      <p className="signup-field">
        <label htmlFor="pwd">Password</label>
        <br />
        <div className="pwd-container">
          <input 
            type={showPwd ? "text" : "password"} 
            id="pwd" 
            required 
            placeholder="Enter your Password" 
          />
          <p className="show-pwd" onClick={toggleShowPwd}>
            {showPwd ? "Hide" : "Show"}
          </p>
        </div>
      </p>

      <p className="signup-field">
        <label htmlFor="re-pwd">Confirm Password</label>
        <br />
        <div className="pwd-container">
          <input 
            type={showPwd ? "text" : "password"} 
            id="re-pwd" 
            required 
            placeholder="Re-Enter your Password" 
          />
          <p className="show-pwd" onClick={toggleShowPwd}>
            {showPwd ? "Hide" : "Show"}
          </p>
        </div>
      </p>

      <input type="submit" value="Create Account" className="center" />

      <p className="center">Already have an account? <Link to="/login">Login</Link></p>

      <p id="subscribe">
        <input type="checkbox" id="news-letter"/>
        <label htmlFor="news-letter">Subscribe to our News Letter</label>
      </p>
    </form>
  );
};

export default SignupForm;
