import React from "react";
import fetchRandomRecipe from "../fetchApi";

const handleClick = () => {
  fetchRandomRecipe();
};

export default function App() {
  return (
    <>
      <h1>App</h1>
      <button onClick={handleClick}>Search Recipes</button>
    </>
  );
}
