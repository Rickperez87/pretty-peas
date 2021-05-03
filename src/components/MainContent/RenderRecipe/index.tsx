import React, { FC, useState, useEffect } from "react";
import IconWithText from "../../IconWithText";
import RecipeTitle from "../RecipeTitle/RecipeTitle";
import Upscaler from "upscaler";
import "./style.scss";

//after testing the example site, i need to implement using gans model with 4x. I think that the docs have a load model example.
interface Props {
  className: string;
  recipe: any;
}

const RenderRecipe: FC<Props> = ({ recipe }) => {
  const [src, setSrc] = useState(recipe.image);
  const { analyzedInstructions } = recipe;
  console.log(!!src);

  const upscaleImage = async () => {
    const upscaler = new Upscaler({
      model: "idealo/psnr-small",
    });
    await upscaler.warmup([[231, 312]]);
    const upscaledImage = await upscaler.upscale(recipe.image, {
      output: "src",
      patchSize: 64,
      padding: 5,
    });

    return upscaledImage;
  };

  useEffect(() => {
    (async () => {
      const updateSrc = await upscaleImage();
      setSrc(updateSrc);
    })();
    return function cleanup() {
      setSrc("");
    };
  }, []);

  return (
    <>
      <div className="recipe__image-wrapper">
        <img className="recipe__image" src={src}></img>
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
                  <>
                    <span className="step-number" key={step.number}>
                      {step.number})
                    </span>
                    <span className="step-text" key={idx}>
                      {step.step}
                    </span>
                  </>
                );
              }
            )}
      </section>
    </>
  );
};

export default RenderRecipe;
