import React, { useState } from "react";
import sprite from "../sprite.svg";
import "./style.scss";
import { useActions } from "~/Hooks/useActions";

function Searchbar() {
  const [term, setTerm] = useState("");
  const { fetchRecipes } = useActions();
  const onSearchSubmit = () => {
    fetchRecipes(term);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit();
  };
  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLFormElement;
    setTerm(target.value);
  };
  return (
    <div className="searchbar">
      <form className="searchbar__form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="searchbar__input"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
          value={term}
        />
        <button className="searchbar__btn">
          <svg className="search-icon">
            <use href={sprite + "#icon-search"} />
          </svg>
          Search Recipes
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
