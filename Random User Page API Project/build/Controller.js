"use strict";
console.log("controller");
const model3 = new Model();
console.log(model3);
const render = new Render();
model3.getAllData().then((res) => render.renderAll(model3));
