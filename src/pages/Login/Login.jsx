import React from "react";
import { Link } from "react-router-dom";

import pastaImg from "../../assets/images/pasta.png";

import "./Login.css";
import LoginForm from "../../components/form/LoginForm";
import ImageComponent from "../../components/ui/ImageComponent";

const Login = () => {
  return (
    <article className="login-page">
      <section className="section1">
        <div>
          <h1>Welcome Back &#128075;</h1>
          <p>
            Everyday is a fresh opportunity to nourish your body and make
            healthy choices. Take control of your meals and plan your week ahead
            with us.
          </p>

          <LoginForm />

          <div id="or">
            <hr />
            Or
            <hr />
          </div>

          <p className="center">
            Don't you have an account? <Link to="/signup">Sign up</Link>
          </p>

          <p className="center" id="copyright">
            &copy; 2024 ALL RIGHTS RESERVED
          </p>
        </div>
      </section>

      <section className="section2">
        <ImageComponent
          src={pastaImg}
          desc={"pasta"}
          hash={"L6BfLT140#~816,@rsog9ew4$*S5"}
        />
      </section>
    </article>
  );
};

export default Login;
