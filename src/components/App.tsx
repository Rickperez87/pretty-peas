import React, { useState, useEffect } from "react";
import fetchRandomRecipe from "../fetchApi";

const [html, setHtml] = useState("");

useEffect(() => {
  const fetchRandom = async () => {
    try {
      const html = await fetchRandomRecipe();
      if (html) setHtml(html);
    } catch (err) {
      console.log(err);
    }
  };
}, []);

export default function App() {
  return (
    <>
      <h1>App</h1>
      <button onClick={handleClick}>Search Recipes</button>
      <div>{html}</div>
    </>
  );
}
