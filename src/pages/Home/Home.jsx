import React from "react";
import NavBar from "../../components/ui/NavBar";
import Footer from "../../components/ui/Footer";
import SearchBar from "../../components/ui/SearchBar";

import foodMakingImg from "../../assets/images/foods.jpg";
import pizzaImg from "../../assets/images/pizza.jpg";
import sandwichImg from "../../assets/images/sandwich.jpg";
import macaronImg from "../../assets/images/macaron.jpg";
import bitesImg from "../../assets/images/bites.jpg";
import dessertsImg from "../../assets/images/desserts.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div data-testid="home-page">
      <NavBar />
      <section className="search-section">
        <SearchBar />
        <button>Or click for a random recipe</button>
      </section>
      <section className="recipe-of-week-section">
        <div className="left-side">
          <h1 style={{ fontWeight: "bold" }}>Recipes of the week</h1>
          <p>Seasonal recipes hand-picked by us, updated weekly, for you!</p>
          <button>Show Me!</button>
        </div>
        <div className="right-side">
          <img src={foodMakingImg} alt="food prep" className="img1" />
          <img src={macaronImg} alt="macaron" className="img2" />
          <img src={pizzaImg} alt="pizza" className="img3" />
          <img src={sandwichImg} alt="sandwich" className="img4" />
          <img src={bitesImg} alt="food bites" className="img5" />
          <img src={dessertsImg} alt="dessert" className="img6" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
