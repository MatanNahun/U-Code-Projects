const model = new Model();
const render = new Render();

model.getAllData().then((res) => render.renderAll(model));

// generate a new user to the page when click the 'generate user' button
$("#generate-btn").on("click", function () {
  model.getAllData().then((res) => render.renderAll(model));
});

Handlebars.registerHelper("upperCase", function (property: string) {
  return property.charAt(0).toUpperCase() + property.slice(1);
});
