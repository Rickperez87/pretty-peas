export default function renderRecipeData(data) {
  const { recipes } = data;
  const [recipe] = recipes;

  const html = `<h1>${recipe.title}</h1>
  <image src='${recipe.image}'></image><h3>Instructions</h3>${recipe.instructions}`;
  return html;
}
