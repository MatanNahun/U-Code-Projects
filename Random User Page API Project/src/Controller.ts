const model = new Model();
console.log(model);
const render = new Render();

model.getAllData().then((res) => render.renderAll(model));

$("#generate-btn").on("click", function () {
  model.getAllData().then((res) => render.renderAll(model));
});
