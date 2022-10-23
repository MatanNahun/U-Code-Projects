console.log("controller");
const model1 = new ModelRecipes();
const render = new RenderRecipes();

$("#render-btn").on("click", function () {
  console.log($("#input-ingredient").val());
  input = $("#input-ingredient").val();

  model1.getReciepesData(input);

  const newReciepeResults = new ModelRecipes();
  newReciepeResults
    .getReciepesData(input)
    .then(() => render.RenderRecipes(newReciepeResults.reciepes));
});
