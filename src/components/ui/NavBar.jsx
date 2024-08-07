import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { HiArrowDown } from "react-icons/hi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import LinkView from "./LinkView";

import "./NavBar.css";

const NavBar = () => {
  //For small screen, hamburger icon is clicked or not.
  const [isToogleActive, setIsToogleActive] = useState(false);

  //For recipe card when recipe navlink is hovered
  const [isRecipeCardVisible, setIsRecipeCardVisible] = useState(false);
  //For small screen, recipe card when extension is clicked
  const [isRecipeCardExtended, setIsRecipeCardExtended] = useState(false);

  return (
    <>
      <header className="app__navbar">
        <div className="navbar__start-nav">
          <div className="navbar__logo">
            <img src="." alt="" />
            <p>Nom Nom</p>
          </div>
          <div className="hamburger_icon">
            {!isToogleActive && (
              <GiHamburgerMenu
                className="icon"
                onClick={() => {
                  setIsToogleActive(true);
                }}
              />
            )}
            {isToogleActive && (
              <MdCancel
                className="icon"
                onClick={() => {
                  setIsToogleActive(false);
                }}
              />
            )}
          </div>
        </div>
        <ul
          className={
            isToogleActive
              ? "navbar__navigations toogled"
              : "navbar__navigations"
          }
        >
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          {/* Recipe navigation li */}
          <li
            onMouseEnter={() => setIsRecipeCardVisible(true)}
            onMouseLeave={() => setIsRecipeCardVisible(false)}
            className="recipe-li"
          >
            <section className="recipe-navlink_section">
              <NavLink
                to="/recipes/all/all"
                className="nav-link"
                onClick={() => setIsRecipeCardVisible(false)}
              >
                Recipes
              </NavLink>
              <HiArrowDown
                className={
                  isRecipeCardExtended
                    ? "arrow-down_img icon gone"
                    : "arrow-down_img icon"
                }
                onClick={() => setIsRecipeCardExtended(true)}
              />
              <MdCancel
                className={
                  isRecipeCardExtended
                    ? "cancel_img icon"
                    : "cancel_img icon gone"
                }
                onClick={() => setIsRecipeCardExtended(false)}
              />
            </section>
            {/* Extra recipes navigations for small screen */}
            <section
              className={
                isRecipeCardExtended
                  ? "extended-recipe_section recipe-card_extended"
                  : "extended-recipe_section"
              }
            >
              <LinkView
                title="Quick Links"
                linkInfoList={[
                  { text: "Breakfast", url: `/recipes/category/` },
                  { text: "Lunch", url: "/recipes/category/" },
                  { text: "Dinner", url: "/recipes/category/" },
                  { text: "Dessert", url: "/recipes/category/" },
                  { text: "Drink", url: "/recipes/category/" },
                ]}
                hideNav={setIsToogleActive}
              />
              <div className="horizontal-line" />
              <LinkView
                title="Popular Categories"
                linkInfoList={[
                  { text: "Healthy", url: "/recipes/category/" },
                  { text: "Chicken", url: "/recipes/category/" },
                  { text: "Easy", url: "/recipes/category/" },
                  { text: "Fast", url: "/recipes/category/" },
                  { text: "Rice", url: "/recipes/category/" },
                ]}
                hideNav={setIsToogleActive}
              />
              <div className="horizontal-line" />
              <LinkView
                title="Recipes by diet"
                linkInfoList={[
                  { text: "Vegan", url: "/recipes/category/" },
                  { text: "Vegeterian", url: "/recipes/category/" },
                  { text: "Pescatarian", url: "/recipes/category/" },
                  { text: "Low Carb", url: "/recipes/category/" },
                ]}
                hideNav={setIsToogleActive}
              />
            </section>
          </li>
          <li>
            <NavLink to="/meal-planner" className="nav-link">
              Meal Planner
            </NavLink>
          </li>
          <li>
            <NavLink to="/saved-items" className="nav-link">
              Saved Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
        <div
          className={
            isToogleActive ? "navbar__end-nav toogled" : "navbar__end-nav"
          }
          style={{ margin: 0 }}
        >
          <div className="brandsContainer">
            <p>
              <BsFacebook className="icon" />
            </p>
            <p>
              <BsInstagram className="icon" />
            </p>
            <p>
              <BsTwitter className="icon" />
            </p>
          </div>
          <div className="navbar__signup">
            <NavLink
              to={"/signup"}
              className="signUpLink signUpBtn button click"
            >
              {/*<span className="signUpBtn button click">Sign Up</span>*/}
              Sign Up
            </NavLink>
          </div>
        </div>
      </header>
      {/* Extra recipes navigation card when hovered */}
      <div
        className={
          isRecipeCardVisible
            ? "navbar__recipe-card recipe-navlink_onhover"
            : "navbar__recipe-card"
        }
        onMouseEnter={() => setIsRecipeCardVisible(true)}
        onMouseLeave={() => setIsRecipeCardVisible(false)}
      >
        <section className="left-section">
          <h3>Variety of recipes available to you.</h3>
          <NavLink to={"/recipes/all/all"}>Browse all recipes {"->"}</NavLink>
        </section>
        <section className="right-section">
          <LinkView
            title="Quick Links"
            linkInfoList={[
              { text: "Breakfast", url: `/recipes/category/` },
              { text: "Lunch", url: "/recipes/category/" },
              { text: "Dinner", url: "/recipes/category/" },
              { text: "Dessert", url: "/recipes/category/" },
              { text: "Drink", url: "/recipes/category/" },
            ]}
            hideNav={setIsRecipeCardVisible}
          />
          <div className="horizontal-line" />
          <LinkView
            title="Popular Categories"
            linkInfoList={[
              { text: "Healthy", url: "/recipes/category/" },
              { text: "Chicken", url: "/recipes/category/" },
              { text: "Easy", url: "/recipes/category/" },
              { text: "Fast", url: "/recipes/category/" },
              { text: "Rice", url: "/recipes/category/" },
            ]}
            hideNav={setIsRecipeCardVisible}
          />
          <div className="horizontal-line" />
          <LinkView
            title="Recipes by diet"
            linkInfoList={[
              { text: "Vegan", url: "/recipes/category/" },
              { text: "Vegeterian", url: "/recipes/category/" },
              { text: "Pescatarian", url: "/recipes/category/" },
              { text: "Low Carb", url: "/recipes/category/" },
            ]}
            hideNav={setIsRecipeCardVisible}
          />
        </section>
      </div>
    </>
  );
};

export default NavBar;
