import React from "react";
import { useActions } from "~/hooks/useActions";
import "./style.scss";

interface Props {
  recipe: any;
}

const SidebarItem: React.FC<Props> = ({ recipe }) => {
  const { fetchRecipe } = useActions();

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | null
  ) => {
    if (!e) return;
    let target = e.target as HTMLDivElement;
    if (!target) return;
    let sidebarElement = target.closest(".sidebar-item");
    if (!sidebarElement) return;
    let id = sidebarElement.getAttribute("id");
    if (!id) return;
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
