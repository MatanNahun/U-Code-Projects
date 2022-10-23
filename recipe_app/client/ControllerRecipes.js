console.log("controller");
const model1 = new ModelRecipes();
const render = new RenderRecipes();

$("#render-btn").on("click", function () {
  input = $("#input-ingredient").val();
  model1.getReciepesData(input);
  const newReciepeResults = new ModelRecipes();
  newReciepeResults
    .getReciepesData(input)
    .then(() => render.RenderRecipes(newReciepeResults.reciepes));
});

$("#results-container").on("click", "#profile-pic", function () {
  const card_details = $(this)
    .closest(".reciepe-card")
    .find(".reciepe-detail")[1].textContent;

  const array_of_ingredients = card_details.split(",");
  alert(array_of_ingredients[0]);
});
