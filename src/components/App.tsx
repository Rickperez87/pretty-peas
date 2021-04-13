import React, { useState, useEffect } from "react";
import Axios from "axios";
import fetchRandomRecipe from "../fetchApi";
import axios from "axios";

export default function App() {
  const [data, setData]: any = useState("");
  const [term, setTerm] = useState("");

  const onSearchSubmit = async (term: string) => {
    const RANDOM_RECIPE_URL =
      "https://api.spoonacular.com/recipes/autocomplete";
    // const apiKey = `?apiKey=${process.env.API_KEY}`;
    const res = await axios.get(RANDOM_RECIPE_URL, {
      params: { query: term, number: 10, apiKey: process.env.API_KEY },
    });
    setData(res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };
  const handleChange = (e) => {
    setTerm(e.target.value);
    console.log(term);
  };
  return (
    <>
      <h1>App</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
          value={term}
        />
        <button>Search Recipes</button>
      </form>
    </>
  );
}
