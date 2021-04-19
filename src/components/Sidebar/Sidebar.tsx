import React from "react";
import SidebarItem from "./SidebarItems/SidebarItem";
import { useSelector } from "react-redux";
import "./style";

const Sidebar = () => {
  const { recipes, loading, error } = useSelector((state) => state.recipes);
  return (
    <>
      {recipes.length === 0 && <div></div>}
      {!loading && !error && (
        <div className="sidebar">
          {recipes.map((recipe) => (
            <SidebarItem key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
    </>
  );
};

export default Sidebar;
