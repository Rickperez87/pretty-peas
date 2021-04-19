import React from "react";
import { useActions } from "../../../Hooks/useActions";
import "./style.scss";

const SidebarItem = ({ recipe }) => {
  const { fetchRecipe } = useActions();

  const handleClick = (e) => {
    let id = e.target.closest(".sidebar-item").getAttribute("id");
    fetchRecipe(parseInt(id, 10));
  };

  return (
    <div onClick={handleClick} id={recipe.id} className="sidebar-item">
      <img src={recipe.image} className="sidebar-item__image"></img>
      <div className="sidebar-item__title">{recipe.title}</div>
    </div>
  );
};

export default SidebarItem;
