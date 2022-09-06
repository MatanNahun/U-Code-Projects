console.log("controller");

const model3 = new Model();
const render = new Render();
model3.getAllData().then((res) => render.renderUser(model3.user));
