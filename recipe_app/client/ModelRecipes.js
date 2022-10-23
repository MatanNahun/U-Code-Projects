console.log("model");
class ModelRecipes {
  constructor() {
    this.reciepes = [];
  }

  async getReciepesData(ingredient) {
    let URL = `/recipes/${ingredient}`;
    const checkbox_input = document.getElementById("checkbox");
    if (checkbox_input.checked == true) {
      console.log("checkbox true");
      URL = `/recipes/${ingredient}?diet=gluten_free`;
    }

    // let URL = `/recipes/${ingredient}`;

    let reciepesData = await $.get(URL);
    console.log(reciepesData);
    for (let i = 0; i < reciepesData.length; i++) {
      this.reciepes.push(
        new Reciepe(
          reciepesData[i]["ingredients"],
          reciepesData[i]["title"],
          reciepesData[i]["thumbnail"],
          reciepesData[i]["href"]
        )
      );
    }
    console.log(this.reciepes);
  }
}
