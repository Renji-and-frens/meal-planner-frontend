import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form method="POST">
      <p className="login-field">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" required="required" placeholder="Example@email.com" />
      </p>

      <p className="login-field">
        <label htmlFor="pwd">Password</label>
        <br />
        <input type="password" id="pwd" required="required" placeholder="At least 8 characters"/>
      </p>

      <Link to="" id="forgot">Forgot Password?</Link>
      <br />

      <input type="submit" value="Sign in" className="center"/>
    </form>
  );
};

export default LoginForm;
