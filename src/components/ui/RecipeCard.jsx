import React from "react";

import "./RecipeCard.css";
import ImageComponent from "./ImageComponent";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ img, title, desc, recipe }) => {
  const navigate = useNavigate();
  return (
    <div
      className="app__recipe-card"
      onClick={() =>
        navigate(`/recipes/view/${recipe.Name}`, { state: recipe })
      }
    >
      <div className="recipe-card__upper-section">
        <img src={img} alt="" />
        <ImageComponent
          src={img}
          desc="temporary"
          hash="LILzjM58Xoa$#ix^o#M|*0?bx[t7"
        />
      </div>
      <div className="recipe-card__lower-section">
        <p className="recipe-card__title">{title}</p>
        <p className="recipe-card__desc">{desc}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
