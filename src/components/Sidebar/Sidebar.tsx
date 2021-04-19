import React from "react";
import SidebarItem from "./SidebarItems/SidebarItem";
import { useSelector } from "react-redux";
import "./style";

const Sidebar = () => {
  const { recipes, loading, error } = useSelector((state) => state.recipes);
  console.log(recipes, loading, error);
  return (
    <div className="sidebar">
      {recipes.map((recipe) => (
        <SidebarItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Sidebar;
