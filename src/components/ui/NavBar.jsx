import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { HiArrowDown } from "react-icons/hi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import "./NavBar.css";

const NavBar = () => {
  const [isToogleActive, setIsToogleActive] = useState(false);

  return (
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
          isToogleActive ? "navbar__navigations toogled" : "navbar__navigations"
        }
      >
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipes" className="nav-link">
            Recipes
          </NavLink>
          <HiArrowDown className="arrow-down_img icon" />
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
        <div className="navbar__signin">
          <NavLink to={"/signIn"} className="signInLink signInBtn button click">
            {/*<span className="signInBtn button click">Sign In</span>*/}
            Sign In
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
