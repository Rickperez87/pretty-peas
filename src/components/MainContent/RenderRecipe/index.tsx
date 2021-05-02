import React, { FC } from "react";
import IconWithText from "../../IconWithText";
import RecipeTitle from "../RecipeTitle/RecipeTitle";
import "./style.scss";

interface Props {
  className: string;
  recipe: any;
}

const RenderRecipe: FC<Props> = ({ recipe }) => {
  const { analyzedInstructions } = recipe;

  return (
    <>
      <div className="recipe__image-wrapper">
        <img className="recipe__image" src={recipe.image}></img>
        <RecipeTitle title={recipe.title} />
      </div>
      <section className="recipe__details">
        <IconWithText
          usehref={"#icon-clock"}
          data={recipe.readyInMinutes}
          text={"Minutes"}
          col={null}
        />
        <IconWithText
          usehref={"#icon-users"}
          data={recipe.servings}
          text={"servings"}
        />
      </section>
      <section className="recipe__ingredients-section">
        <h3 className="recipe__title">recipe ingredients</h3>
        {recipe.ingredients.map((ingredient: any, idx: number) => {
          const isEven = (num: number) => num % 2 === 0;
          return (
            <IconWithText
              col={isEven(idx) ? "col-1" : "col-2"}
              key={idx}
              usehref={"#icon-checkmark"}
              text={ingredient.name}
              data={`${ingredient.amount.us.value
                .toFixed(1)
                .replace(".0", "")} ${ingredient.amount.us.unit}`}
            />
          );
        })}
      </section>
      <section className="recipe__directions-section">
        <h3 className="recipe__title">How to cook it</h3>

        {!analyzedInstructions[0].steps
          ? ""
          : analyzedInstructions[0].steps.map(
              (step: { number: number; step: string }, idx: number) => {
                return (
                  <div key={idx}>
                    <span className="step-number" key={step.number}>
                      {step.number})
                    </span>
                    <span className="step-text" key={idx}>
                      {step.step}
                    </span>
                  </div>
                );
              }
            )}
      </section>
    </>
  );
};

export default RenderRecipe;
