import React from "react";

import pastaImg from "../../assets/images/pasta.png";

import "./Signup.css";
import SignupForm from "../../components/form/SignupForm";
import ImageComponent from "../../components/ui/ImageComponent";

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
        <ImageComponent
          src={pastaImg}
          desc={"pasta"}
          hash={"L6BfLT140#~816,@rsog9ew4$*S5"}
        />
      </section>
    </article>
  );
};

export default Signup;
