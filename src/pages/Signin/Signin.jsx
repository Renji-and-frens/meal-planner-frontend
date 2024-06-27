import React from "react";

import pastaImg from "../../assets/images/pasta.png";

import "./Signin.css";
import SignupForm from "../../components/form/SignupForm";

const Signin = () => {
  return (
    <article className="signin-page">
      <section className="section1">
          <div>
            <h1>Welcome to Nom Nom</h1>

            <SignupForm />
          </div>
      </section>

      <section className="section2">
        <img src={pastaImg} alt="pasta" />
      </section>
    </article>
  );
};

export default Signin;
