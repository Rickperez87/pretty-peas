import React from "react";
import IconWithText from "../../IconWithText";
import "./style.scss";

const RenderRecipe = ({ recipe }) => {
  const { analyzedInstructions } = recipe;
  console.log(analyzedInstructions[0]);

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
      <section className="recipe__ingredients-section">
        <h3 className="recipe__title">recipe ingredients</h3>
        {recipe.ingredients.map((ingredient, idx: number) => {
          const isEven = (num: number) => num % 2 === 0;
          return (
            <IconWithText
              col={isEven(idx) ? "col-1" : "col-2"}
              key={idx}
              usehref={"#icon-checkmark"}
              text={ingredient.name}
              data={`${ingredient.amount.us.value.toFixed(1)} ${
                ingredient.amount.us.unit
              }`}
            />
          );
        })}
      </section>
      <section className="recipe__directions-section">
        <h3 className="recipe__title">How to cook it</h3>

        {analyzedInstructions[0].steps.map((step, idx: number) => {
          return (
            <div className="step" key={idx}>
              <span className="step-number">{step.number}</span>
              <span className="step-text">{step.step}</span>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default RenderRecipe;
