import React, { useState } from "react";
import ImageComponent from "../../components/ui/ImageComponent";
import Dropdown from "../../components/ui/Dropdown";
import { useParams } from "react-router-dom";
import RecipeCard from "../../components/ui/RecipeCard";
import Footer from "../../components/ui/Footer";

import foodBackground from "../../assets/images/foods-background.jpg";

import exampleArr from "../../data/example.json";

import { RxCross1 } from "react-icons/rx";

import "./Recipes.css";
import NavBar from "../../components/ui/NavBar";

const Recipes = () => {
  //getting parameters from url
  const { searchType, searchedItem } = useParams();
  // decode the encoded search item
  let decodedSearchedItem = "";
  try {
    decodedSearchedItem = decodeURIComponent(searchedItem);
  } catch (e) {
    console.error(`Failed to decode searched item using ${searchedItem}: `, e);
    decodedSearchedItem = searchedItem; // Fallback to the original value if decoding fails
  }

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

  //to store user selected filter options
  const [selectedFilter, setSelectedFilter] = useState([]);

  const addSelectedFilter = (item) => {
    setSelectedFilter((prev) => [...prev, item]);
  };

  const removeSelectedFilter = (item) => {
    setSelectedFilter(selectedFilter.filter((selected) => selected !== item));
  };

  const clearSelectedFilter = () => {
    setSelectedFilter([]);
  };

  //checks if clear btn is hovered for css animation
  const [isClearHovered, setIsClearHovered] = useState(false);

  return (
    <>
      <NavBar />
      <div className="app__recipes-page">
        <div className="recipes-header">
          <ImageComponent
            src={foodBackground}
            desc=""
            hash="LILzjM58Xoa$#ix^o#M|*0?bx[t7"
          />
          <div className="text-container">
            <p className="sub-text">{searchType}</p>
            <h1>
              {searchType === "all"
                ? "Discover our amazing recipes"
                : `${decodedSearchedItem.replace("-", " ").toUpperCase()}`}
            </h1>
          </div>
        </div>
        <div className="recipes-body">
          <section className="filter-tab">
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="sub-text" style={{ color: "gray" }}>
                  Filter Results
                </p>
                <div
                  className={
                    selectedFilter.length === 0
                      ? "filter-clear-btn"
                      : "filter-clear-btn clear-btn-active"
                  }
                  onMouseEnter={() => setIsClearHovered(true)}
                  onMouseLeave={() => setIsClearHovered(false)}
                  onClick={() => clearSelectedFilter()}
                >
                  <p className="sub-text">Clear Filters</p>
                  <div
                    className={
                      isClearHovered
                        ? "horizontal-line borderOnHover"
                        : "horizontal-line"
                    }
                  ></div>
                </div>
              </div>
              <div className="dropdowns-container">
                <Dropdown
                  filterTitle="Popular"
                  itemsArr={popularSelections}
                  selectedFilter={selectedFilter}
                  addSelectedFilter={addSelectedFilter}
                  removeSelectedFilter={removeSelectedFilter}
                />
                <Dropdown
                  filterTitle="Diets"
                  itemsArr={dietSelections}
                  selectedFilter={selectedFilter}
                  addSelectedFilter={addSelectedFilter}
                  removeSelectedFilter={removeSelectedFilter}
                />
                <Dropdown
                  filterTitle="Cuisines"
                  itemsArr={cuisinesSelections}
                  selectedFilter={selectedFilter}
                  addSelectedFilter={addSelectedFilter}
                  removeSelectedFilter={removeSelectedFilter}
                />
              </div>
            </div>
            <div className="selected-filter-tab">
              {selectedFilter.map((filter, index) => {
                return (
                  <div
                    key={index}
                    className="filter-contain"
                    onClick={() => removeSelectedFilter(filter)}
                  >
                    {filter}
                    <RxCross1 />
                  </div>
                );
              })}
            </div>
          </section>
          <section className="recipes-showcase">
            <h1>This is temporary recipe showcase</h1>
            <div className="recipes-grid">
              {exampleArr.map((recipe, index) => (
                <RecipeCard
                  img={foodBackground}
                  title={recipe.Name}
                  desc={
                    "sdkmnsklkn ds,fndslfnlsd fsd,fkns,mdfn,mdsf s,dmfnsd,mfnds,mfnm"
                  }
                  recipe={recipe}
                />
              ))}
            </div>
            <div className="control-nav"></div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipes;
