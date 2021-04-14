import React, { useState } from "react";
import axios from "axios";

export default function Searchbar() {
  const [data, setData]: any = useState([]);
  const [term, setTerm] = useState("");

  const onSearchSubmit = async (term: string) => {
    const RANDOM_RECIPE_URL =
      "https://api.spoonacular.com/recipes/complexSearch";
    const res = await axios.get(RANDOM_RECIPE_URL, {
      params: { query: term, number: 10, apiKey: process.env.API_KEY },
    });
    setData(res.data.results);
  };
  console.log(data);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(term);
  };
  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLFormElement;
    setTerm(target.value);
  };
  return (
    <>
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
