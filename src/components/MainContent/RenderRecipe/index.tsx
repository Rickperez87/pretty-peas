import React from "react";
import IconWithText from "../../IconWithText";
import "./style.scss";

const RenderRecipe = ({ recipe }) => {
  return (
    <>
      <img className="recipe__image" src={recipe.image}></img>
      <section className="recipe__details">
        <IconWithText
          usehref={"#icon-clock"}
          data={recipe.readyInMinutes}
          text={"Minutes"}
        />
        <IconWithText
          usehref={"#icon-users"}
          data={recipe.servings}
          text={"servings"}
        />
      </section>
      <section className="recipe__text-section">
        <h3 className="recipe__title">recipe ingredients</h3>
        {recipe.ingredients.map((ingredient) => {
          return (
            <IconWithText
              usehref={"#icon-checkmark"}
              text={ingredient.name}
              data={`${ingredient.amount.us.value} ${ingredient.amount.us.unit}`}
            />
          );
        })}
      </section>
    </>
  );
};

export default RenderRecipe;
