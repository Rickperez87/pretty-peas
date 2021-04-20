import React from "react";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import RenderRecipe from "./RenderRecipe";
import "./style.scss";

const MainContent = () => {
  const { recipe, loading, error } = useTypedSelector((state) => state.recipe);
  console.log(recipe, loading, error);
  return (
    <div className="main-content">
      {recipe.length === 0 && (
        <p className="main-content__start-paragraph">
          Start by searching for a recipe
        </p>
      )}
      {error && <h3 className="main-content__error">{error}</h3>}
      {loading && <h3 className="main-content__error">Loading...</h3>}
      {!error && !loading && (
        <RenderRecipe className="main-content__render-recipe" recipe={recipe} />
      )}
    </div>
  );
};

export default MainContent;
