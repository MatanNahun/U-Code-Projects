console.log("model");
class ModelRecipes {
  constructor() {
    this.reciepes = [];
  }

  async getReciepesData(ingredient) {
    let URL = `/recipes/${ingredient}`;

    let reciepesData = await $.get(URL);
    console.log(reciepesData);
    for (let i = 0; i < reciepesData.length; i++) {
      this.reciepes.push({
        ingredient: reciepesData[i]["ingredients"],
        title: reciepesData[i]["title"],
        thumbnail: reciepesData[i]["thumbnail"],
        href: reciepesData[i]["href"],
      });
    }
    console.log(this.reciepes);
  }
}
