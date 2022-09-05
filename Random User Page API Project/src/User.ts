class User {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  friends: string[];
  pictureURL: string;

  constructor(
    friends: string[],
    firstName: string,
    lastName: string,
    city: string,
    state: string,
    pictureURL: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.state = state;
    this.friends = friends;
    this.pictureURL = pictureURL;
  }
}
