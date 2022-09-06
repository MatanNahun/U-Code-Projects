class User {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  friends: string[];
  pictureURL: string;

  constructor() {
    // pictureURL: string // state: string, // city: string, // lastName: string, // firstName: string, // friends: string[],
    this.firstName = "firstName";
    this.lastName = "lastName";
    this.city = "city";
    this.state = "state";
    this.friends = [];
    this.pictureURL = "pictureURL";
  }

  initUser() {
    var $user = $(this); // get access to user with closure

    return $.ajax({
      url: "https://randomuser.me/api/?results=7",
      dataType: "json",
      success: function (UserData) {
        const userFriends: string[] = [];
        for (let i = 1; i < UserData.results.length; i++) {
          userFriends.push(
            UserData.results[i].name.first + " " + UserData.results[i].name.last
          );
        }
        $user[0].firstName = UserData.results[0].name.first;
        $user[0].lastName = UserData.results[0].name.last;
        $user[0].city = UserData.results[0].location.city;
        $user[0].city = UserData.results[0].location.state;
        $user[0].friends = userFriends;
        $user[0].pictureURL = UserData.results[0].picture.thumbnail;

        // console.log($user[0]);
      },
    });
  }
}

// const user1 = new User();
// user1.initUser();
