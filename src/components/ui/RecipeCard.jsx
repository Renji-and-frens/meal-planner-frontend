import React from "react";

const RecipeCard = ({ img, title, desc }) => {
  return (
    <div className="app__recipe-card">
      <div className="recipe-card__upper-section">
        <img src={img} alt="" />
      </div>
      <div className="recipe-card__lower-section">
        <p>{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
