console.log("Model");

class Model {
  user: User;
  //   user = $.get("https://randomuser.me/api/");

  constructor(user: User) {
    this.user = user;
    $.ajax({
      url: "https://randomuser.me/api/?results=7",
      dataType: "json",
      success: function (UserData) {
        console.log(UserData);
        const userFirstName = UserData.results[0].name.first;
        console.log(userFirstName);
        const userLastName = UserData.results[0].name.last;
        console.log(userLastName);
        const userCity = UserData.results[0].location.city;
        console.log(userCity);
        const userState = UserData.results[0].location.state;
        console.log(userState);

        const userFriends: string[] = [];
        for (let i = 1; i < UserData.results.length; i++) {
          userFriends.push(
            UserData.results[i].name.first + " " + UserData.results[i].name.last
          );
        }
        console.log(userFriends);
        const userPictureLink = UserData.results[0].picture.thumbnail;
        console.log(userPictureLink);
      },
    });

    $.ajax({
      url: "https://api.kanye.rest",
      dataType: "json",
      success: function (kanyeData) {
        const quote = kanyeData.quote;
        console.log(quote);
      },
    });

    $.ajax({
      url: "https://api.kanye.rest",
      dataType: "json",
      success: function (kanyeData) {
        const quote = kanyeData.quote;
        console.log(quote);
      },
    });
  }
}
const user1 = new User([], "Haifa", "Isreal", "matan", "Nahum", "link");
const model = new Model(user1);
