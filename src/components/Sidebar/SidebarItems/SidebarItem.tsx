import React from "react";
import "./style.scss";

function SidebarItem({ recipe }) {
  return (
    <div className="sidebar-item">
      <img src={recipe.image} className="sidebar-item__image"></img>
      <div className="sidebar-item__title">{recipe.title}</div>
    </div>
  );
}

export default SidebarItem;
