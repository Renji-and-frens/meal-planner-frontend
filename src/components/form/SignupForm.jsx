import React from "react";
import { Link } from "react-router-dom";

// import pastaImg from "../../assets/images/pasta.png";
// main branch hasn't got the image yet

const SignupForm = () => {
  return (
    <article>
      <section className="section1">
          <div>
            <h1>Welcome to Nom Nom</h1>

            <form method="POST">
              <p className="signin-field">
                <label htmlFor="name">Full Name</label>
                <br />
                <input type="text" id="name" required="required" placeholder="John Doe" />
              </p>

              <p className="signin-field">
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" id="email" required="required" placeholder="Enter your Email here" />
              </p>

              <p className="signin-field">
                <label htmlFor="pwd">Password</label>
                <br />
                <input type="password" id="pwd" required="required" placeholder="Enter your Password" />
              </p>

              <p className="signin-field">
                <label htmlFor="re-pwd">Confirm Password</label>
                <br />
                <input type="password" id="re-pwd" required="required" placeholder="Re-Enter your Password" />
              </p>

              <input type="submit" value="Create Account" className="center" />

              <p className="center">Already have an account? <Link to="">Login</Link></p>

              <p id="subscribe">
                <input type="checkbox" id="news-letter"/>
                <label htmlFor="news-letter">Subscribe to our News Letter</label>
              </p>
            </form>
          </div>
      </section>

      <section className="section2">
        <img /* src={pastaImg} */ alt="pasta" />
      </section>
    </article>
  );
};

export default SignupForm;
