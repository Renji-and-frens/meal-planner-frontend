import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <form method="POST">
      <p className="signup-field">
        <label htmlFor="name">Full Name</label>
        <br />
        <input type="text" id="name" required="required" placeholder="John Doe" />
      </p>

      <p className="signup-field">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" required="required" placeholder="Enter your Email here" />
      </p>

      <p className="signup-field">
        <label htmlFor="pwd">Password</label>
        <br />
        <input type="password" id="pwd" required="required" placeholder="Enter your Password" />
      </p>

      <p className="signup-field">
        <label htmlFor="re-pwd">Confirm Password</label>
        <br />
        <input type="password" id="re-pwd" required="required" placeholder="Re-Enter your Password" />
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
