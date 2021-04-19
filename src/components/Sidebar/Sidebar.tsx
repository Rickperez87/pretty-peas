import React from "react";
import SidebarItem from "./SidebarItems/SidebarItem";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import "./style";

const Sidebar = () => {
  const { recipes, loading, error } = useTypedSelector(
    (state) => state.recipes
  );
  return (
    <>
      {recipes.length === 0 && <div></div>}
      {!loading && !error && (
        <div className="sidebar">
          {recipes.map((recipe: any) => (
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
