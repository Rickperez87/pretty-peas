import React, { useState } from "react";
import sprite from "~/assets/sprite.svg";
import { useActions } from "~/hooks/useActions";
import "./style.scss";

const Searchbar: React.FC<{}> = () => {
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
          placeholder="Search over 1,000,000 recipes"
          onChange={(e) => {
            handleChange(e);
          }}
          value={term}
        />
        <button className="searchbar__btn">
          <svg className="search-icon">
            <use href={sprite + "#icon-search"} />
          </svg>
          <p>Search</p>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
