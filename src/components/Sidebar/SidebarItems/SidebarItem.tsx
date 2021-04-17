import React from "react";
import { connect } from "react-redux";
import { fetchIngredients } from "../../../state/actions";
import "./style.scss";

function SidebarItem({ recipe, fetchIngredients }) {
  const handleClick = (e) => {
    let id = e.target.closest(".sidebar-item").getAttribute("id");
    fetchIngredients(id);
  };

  return (
    <div onClick={handleClick} id={recipe.id} className="sidebar-item">
      <img src={recipe.image} className="sidebar-item__image"></img>
      <div className="sidebar-item__title">{recipe.title}</div>
    </div>
  );
}

export default connect(null, { fetchIngredients })(SidebarItem);
