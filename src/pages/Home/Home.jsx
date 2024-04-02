import React from "react";
import NavBar from "../../components/ui/NavBar";

const Home = () => {
  return (
    <div data-testid="home-page">
      <NavBar />
      <h1>Welcome to Meal Planner website</h1>
      <div>This is Home Page</div>
    </div>
  );
};

export default Home;
