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
import ImageComponent from "../../components/ui/ImageComponent";

import hash from "../../data/blurhash-hash.json";
import Carousel from "../../components/ui/Carousel";

//temp data for carousel
const tempData = [
  {
    name: "Chicken noodle soup",
    img: sandwichImg,
  },
  {
    name: "Pizza",
    img: macaronImg,
  },
  {
    name: "Vegan Queso",
    img: foodMakingImg,
  },
  {
    name: "creamy-chicken-instant-ramen",
    img: dessertsImg,
  },
  {
    name: "pancetta",
    img: bitesImg,
  },
  {
    name: "chicken-and-dumplings",
    img: pizzaImg,
  },
];

const Home = () => {
  return (
    <div data-testid="home-page">
      <NavBar />
      <section className="search-section">
        <div className="background-image">
          <ImageComponent src={pizzaImg} desc={"pizza"} hash={hash.pizza} />
        </div>
        <SearchBar />
        <button className="ran-recipe-btn">Or click for a random recipe</button>
      </section>
      <section className="recipe-of-week-section">
        <div className="left-side">
          <h1 style={{ fontWeight: "bold" }}>Recipes of the week</h1>
          <p>Seasonal recipes hand-picked by us, updated weekly, for you!</p>
          <button>Show Me!</button>
        </div>
        <div className="right-side">
          <div className="img img1">
            <ImageComponent
              src={foodMakingImg}
              desc="food prep"
              hash={hash.prep}
            />
          </div>
          <div className="img img2">
            <ImageComponent
              src={macaronImg}
              desc="macaron"
              hash={hash.macaron}
            />
          </div>
          <div className="img img3">
            <ImageComponent src={pizzaImg} desc="pizza" hash={hash.pizza} />
          </div>
          <div className="img img4">
            <ImageComponent
              src={sandwichImg}
              desc="sandwich"
              hash={hash.sandwich}
            />
          </div>
          <div className="img img5">
            <ImageComponent
              src={bitesImg}
              desc="food bites"
              hash={hash.bites}
            />
          </div>
          <div className="img img6">
            <ImageComponent
              src={dessertsImg}
              desc="dessert"
              hash={hash.desserts}
            />
          </div>
        </div>
      </section>
      <section className="new-recipes-section">
        <h1>Some of our recipes!</h1>
        <Carousel arrayData={tempData} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
