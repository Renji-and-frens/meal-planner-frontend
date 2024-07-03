import React from "react";
import { useEffect } from "react";

import pastaImg from "../../assets/images/pasta.png";

import "./Signup.css";
import SignupForm from "../../components/form/SignupForm";
import ImageComponent from "../../components/ui/ImageComponent";

import hash from "../../data/blurhash-hash.json";

const Signup = () => {
  useEffect(() => {
    document.title = "Welcome to Nom Nom";
  });

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
          hash={hash.pasta}
        />
      </section>
    </article>
  );
};

export default Signup;
