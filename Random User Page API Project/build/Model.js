"use strict";
console.log("Model");
class Model {
    constructor(personData) {
        this.personData = $.get("https://randomuser.me/api/");
        this.personData = personData;
    }
}
// $.ajax({
//   url: "https://randomuser.me/api/",
//   dataType: "json",
//   success: function (data) {
//     console.log(data);
//   },
// });
$.get("https://randomuser.me/api/").then;
{
    data => console.log(data);
}
