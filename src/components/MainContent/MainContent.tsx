import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const MainContent = () => {
  const { recipe, loading, error } = useSelector((state) => state.recipe);
  console.log(recipe, loading, error);
  return (
    <>
      {recipe.length === 0 && (
        <div className="main-content">Start by searching for a recipe</div>
      )}
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && <div>{recipe.aggregateLikes}</div>}
    </>
  );
};

export default MainContent;
