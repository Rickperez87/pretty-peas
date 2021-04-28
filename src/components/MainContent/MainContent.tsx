import React from "react";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import RenderRecipe from "./RenderRecipe";
import sprite from "../sprite.svg";
import "./style.scss";

const MainContent: React.FC<{}> = () => {
  const { recipe, loading, error } = useTypedSelector((state) => state.recipe);
  console.log(recipe, loading, error);
  return (
    <div className="main-content">
      {recipe.length === 0 && (
        <div className="main-content__default-paragraph">
          <svg className="smile-icon">
            <use href={sprite + "#icon-smile"} />
          </svg>
          <p className="main-content__paragraph">
            Start by searching for a recipe
          </p>
        </div>
      )}
      {error && <h3 className="main-content__error">{error}</h3>}
      {loading && <h3 className="main-content__loading">Loading...</h3>}
      {!error && !loading && recipe.length !== 0 && (
        <RenderRecipe className="main-content__render-recipe" recipe={recipe} />
      )}
    </div>
  );
};

export default MainContent;
