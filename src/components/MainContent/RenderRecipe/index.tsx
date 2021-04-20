import React from "react";
import "./style.scss";

const RenderRecipe = ({ recipe }) => {
  return (
    <>
      <img className="recipe__image" src={recipe.image}></img>
    </>
  );
};

export default RenderRecipe;
