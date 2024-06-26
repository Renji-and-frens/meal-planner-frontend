import React from "react";
import { Link } from "react-router-dom";

import pastaImg from "../../assets/images/pasta.png";

const LoginForm = () => {
  return (
    <article>
      <section className="section1">
        <div>
          <h1>Welcome Back &#128075;</h1>
          <p>Everyday is a fresh opportunity to nourish your body and make healthy choices. Take control of your meals and plan your week ahead with us.</p>

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

          <p className="center">Don't you have an account? <Link to="">Sign up</Link></p>

          <p className="center" id="copyright">&copy; 2024 ALL RIGHTS RESERVED</p>
        </div>
      </section>
      

      <section className="section2">
        <img src={pastaImg} alt="pasta" />
      </section>
    </article>
  );
};

export default LoginForm;
