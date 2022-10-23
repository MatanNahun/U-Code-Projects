console.log("render");
class RenderRecipes {
  RenderRecipes(reciepes) {
    const sourceReciepes = $("#results-template").html();
    const template = Handlebars.compile(sourceReciepes);
    let newHTML = template({ reciepes });
    $(".reciepes-results").append(newHTML);
  }
}
