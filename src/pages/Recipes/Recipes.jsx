import React from "react";
import ImageComponent from "../../components/ui/ImageComponent";
import Dropdown from "../../components/ui/Dropdown";
import { useParams } from "react-router-dom";

import "./Recipes.css";
import NavBar from "../../components/ui/NavBar";

const Recipes = () => {
  //getting parameters from url
  const { searchType, searchedItem } = useParams();

  //filter items for dropdown
  const popularSelections = [
    "Quick",
    "Easy",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Main",
    "Starter",
    "Side",
    "Snack",
  ];
  const dietSelections = [
    "Vegetarian",
    "Vegan",
    "Gluten Free",
    "Dairy Free",
    "Nut Free",
    "Keto",
    "Raw",
    "Pescatarian",
  ];
  const cuisinesSelections = [
    "African",
    "American",
    "Asian",
    "Caribbean",
    "European",
    "Latin American",
    "Middle Eastern",
    "Oceanian",
  ];
  return (
    <>
      <NavBar />
      <div className="app__recipes-page">
        <div className="recipes-header">
          <ImageComponent src="" desc="" hash="LILzjM58Xoa$#ix^o#M|*0?bx[t7" />
          <div>
            <p className="sub-text">{searchType}</p>
            <h1>
              {searchType === "all"
                ? "Discover our amazing recipes"
                : `${searchedItem}`}
            </h1>
          </div>
        </div>
        <section className="filter-tab">
          <div>
            <p className="sub-text">Filter Results</p>
            <div className="dropdowns-container">
              <Dropdown filterTitle="Popular" itemsArr={popularSelections} />
              <Dropdown filterTitle="Diets" itemsArr={dietSelections} />
              <Dropdown filterTitle="Cuisines" itemsArr={cuisinesSelections} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Recipes;
