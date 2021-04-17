import React from "react";
import { connect } from "react-redux";
import SidebarItem from "./SidebarItems/SidebarItem";
import "./style";

const Sidebar = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className="sidebar">
      {recipes.map((recipe) => (
        <SidebarItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { recipes: state.recipes };
};

export default connect(mapStateToProps)(Sidebar);
