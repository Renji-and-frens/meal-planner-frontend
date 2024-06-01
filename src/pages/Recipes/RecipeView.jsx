import { useLocation } from "react-router-dom";
import "./RecipeView.css";

import { GiCampCookingPot } from "react-icons/gi";
import { GiSpoon } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";

import React from "react";
import NavBar from "../../components/ui/NavBar";
import Footer from "../../components/ui/Footer";
import Carousel from "../../components/ui/Carousel";

import foodMakingImg from "../../assets/images/foods.jpg";
import pizzaImg from "../../assets/images/pizza.jpg";
import sandwichImg from "../../assets/images/sandwich.jpg";
import macaronImg from "../../assets/images/macaron.jpg";
import bitesImg from "../../assets/images/bites.jpg";
import dessertsImg from "../../assets/images/desserts.jpg";
import convertSeconds from "../../utils/recipeUtils";

const RecipeView = () => {
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

  const location = useLocation();
  const recipe = location.state;
  return (
    <>
      <NavBar />
      <div className="app__recipe-view">
        <div className="recipe-view">
          <section className="recipe-requirements">
            <div style={{ position: "relative" }}>
              <BsBookmarkStar
                style={{
                  fontSize: "1.5rem",
                  position: "absolute",
                  right: "-10",
                  top: "8",
                }}
              />
            </div>
            <h1 className="name">{recipe.Name}</h1>
            <div className="horizontal-line" />
            <div className="div__time-serving">
              <div className="time">
                <GiCampCookingPot style={{ fontSize: "2rem" }} />
                Cook Time:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {convertSeconds(recipe.CookTime)}
                </span>
              </div>
              <div className="serving">
                <GiSpoon style={{ fontSize: "2rem" }} />
                Serving:{" "}
                <span style={{ fontWeight: "bold" }}>{recipe.Servings}</span>
              </div>
            </div>
            <div className="horizontal-line" />
            <div className="tags">
              Tags:
              {recipe.Tags.map((tag, index) => (
                <div style={{ fontWeight: "bold" }} key={index}>
                  {tag.Name}
                </div>
              ))}
            </div>
            <div className="horizontal-line" />
            <ul className="ingredients">
              Ingredients:{" "}
              {recipe.IngredientDetails.map((ingredient, index) => (
                <li
                  className="ingredient"
                  style={{ fontWeight: "bold" }}
                  key={index}
                >
                  {ingredient}
                </li>
              ))}
            </ul>
            <div style={{ position: "relative", marginTop: "0.5rem" }}>
              <p className="author">Author: {recipe.Author.Name}</p>
            </div>
          </section>
          <section className="recipe-instructions">
            <p>Instructions: </p>
            {recipe.Instructions.map((instruction, index) => (
              <div className="instruction-contain" key={index}>
                <span className="step">Step {index + 1}:</span>
                <span className="instruction">{instruction}</span>
              </div>
            ))}
          </section>
        </div>
        <section className="similar-recipes-section">
          <h1>Similar recipes!</h1>
          <Carousel arrayData={tempData} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RecipeView;
