import React, { FC } from "react";
import "./style.scss";

interface Props {
  title: string;
}
const RecipeTitle: FC<Props> = ({ title }) => {
  return (
    <div className="recipeTitle">
      <span className="recipeTitle__text">{title}</span>
    </div>
  );
};

export default RecipeTitle;
