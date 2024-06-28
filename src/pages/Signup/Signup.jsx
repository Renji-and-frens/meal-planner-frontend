import React from "react";

import pastaImg from "../../assets/images/pasta.png";

import "./Signup.css";
import SignupForm from "../../components/form/SignupForm";

const Signup = () => {
  return (
    <article className="signup-page">
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

export default Signup;
