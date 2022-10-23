console.log("model");
class model {
  constructor() {
    this.reciepes = [];
  }

  async getReciepesData(ingredient) {
    // const checkbox_input = document.getElementById(
    //   "checkbox"
    // ) as HTMLInputElement;

    // let URL: string = `/players/${team}/${year}`;
    // URL = checkbox_input?.checked ? URL + "?dateOfBirth=true" : URL;

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
console.log("hi");
modelCheck = new model();
modelCheck.getReciepesData("tomato");
