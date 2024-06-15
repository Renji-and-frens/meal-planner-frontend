import React from "react";
import LinkView from "./LinkView";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="newsLetter-section">
        <div className="logo-title">
          <p>Nom Nom</p>
        </div>
        <h2>Join our newsletter</h2>
        <p className="sub-text">
          Subscribe to our newsletter for getting latest recipe and blog updates
          regularly
        </p>
        <section className="subscribe-container">
          <input type="text" placeholder="Enter your email..." />
          <p className="subscribe-btn">Subscribe {"->"}</p>
        </section>
      </div>
      <div className="horizontal-line" />
      <div className="links-section">
        <LinkView
          title="Helpful Links"
          linkInfoList={[
            { text: "Home", url: "/" },
            { text: "Contact Us", url: "" },
            { text: "Newsletters", url: "" },
            { text: "Meal Planner", url: "" },
            { text: "Recipes", url: "" },
          ]}
        />
        <LinkView
          title="Other Links"
          linkInfoList={[
            { text: "Terms & Condition", url: "" },
            { text: "Privacy Policy", url: "" },
            { text: "About Us", url: "" },
          ]}
        />
        <LinkView
          title="Social Media"
          linkInfoList={[
            { text: "Facebook", url: "" },
            { text: "Instagram", url: "" },
            { text: "LinkedIn", url: "" },
            { text: "Twitter", url: "" },
          ]}
        />
      </div>
    </div>
  );
};

export default Footer;
