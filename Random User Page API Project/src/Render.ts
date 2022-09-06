console.log("Render");

class Render {
  renderUser(user: User): void {
    const source = $("#user-template").html();
    const template = Handlebars.compile(source);

    let newHTML = template({
      firstName: user.firstName,
      lastName: user.lastName,
      city: user.city,
      state: user.state,
      pictureURL: user.pictureURL,
    });
    $(".user-container").append(newHTML);
  }
}

// const modelToRender = new Model();
// console.log(modelToRender.user);

// const Render1 = new Render();
// Render1.renderUser(modelToRender.user);
