import React, { useState, useEffect } from "react";
import Axios from "axios";
import fetchRandomRecipe from "../fetchApi";
import axios from "axios";

export default function App() {
  const [data, setData]: any = useState("");
  const [term, setTerm] = useState("");

  const onSearchSubmit = async (term: string) => {
    const RANDOM_RECIPE_URL =
      "https://api.spoonacular.com/recipes/complexSearch";
    const res = await axios.get(RANDOM_RECIPE_URL, {
      params: { query: term, number: 10, apiKey: process.env.API_KEY },
    });
    setData(res);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(term);
  };
  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLFormElement;
    setTerm(target.value);
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
