import React from "react";

import NavBar from "../../components/ui/NavBar";
import Footer from "../../components/ui/Footer";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div data-testid="contact-page" className="contact-page">
        <section className="contact-section">
          <h1>Contact Us</h1>
          <div>
            <p>
              We love hearing from you! Please contact us via the email address
              or phone numbers below.
            </p>
            <p>
              For answers to frequently asked questions about your subscription,
              please check out our FAQ page.
            </p>
            <p>Email address: Help@gmail.com</p>
            <p>We will respond to your email within 72 hours.</p>
            <p>
              Hours of operation: Monday through Friday, 9 a.m. to 7 p.m. E.T.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
