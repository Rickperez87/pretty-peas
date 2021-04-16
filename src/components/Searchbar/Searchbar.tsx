import React, { useState } from "react";
import "./style.scss";
import { fetchRecipes } from "../../state/actions";
import { connect } from "react-redux";

function Searchbar(props) {
  console.log(props);
  const [data, setData]: any = useState([]);
  const [term, setTerm] = useState("");

  const onSearchSubmit = () => {
    props.fetchRecipes(term);
    console.log(props.recipes);
  };
  console.log(data);
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
        <button className="searchbar__btn">Search Recipes</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { recipes: state.recipes.data };
};

export default connect(mapStateToProps, { fetchRecipes })(Searchbar);
