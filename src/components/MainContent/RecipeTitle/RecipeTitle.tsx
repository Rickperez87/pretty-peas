import React, { FC } from "react";

interface Props {
  title: string;
}
const RecipeTitle: FC<Props> = ({ title }) => {
  return <div className="recipeTitle">{title}</div>;
};

export default RecipeTitle;
