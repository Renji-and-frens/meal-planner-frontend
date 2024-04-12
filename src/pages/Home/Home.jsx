import React from "react";
import NavBar from "../../components/ui/NavBar";
import Footer from "../../components/ui/Footer";

const Home = () => {
  return (
    <div data-testid="home-page">
      <NavBar />
      <h1>Welcome to Meal Planner website</h1>
      <div>This is Home Page</div>
      <Footer />
    </div>
  );
};

export default Home;
