import React from "react";
import { useActions } from "../../../Hooks/useActions";
import "./style.scss";

interface Props {
  recipe: any;
}

const SidebarItem: React.FC<Props> = ({ recipe }) => {
  const { fetchRecipe } = useActions();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    let target = e.target as HTMLDivElement;
    if (target != null) {
      let id = target.closest(".sidebar-item").getAttribute("id");
      fetchRecipe(parseInt(id, 10));
    }
  };

  return (
    <div onClick={handleClick} id={recipe.id} className="sidebar-item">
      <img src={recipe.image} className="sidebar-item__image"></img>
      <div className="sidebar-item__title">{recipe.title}</div>
    </div>
  );
};

export default SidebarItem;
