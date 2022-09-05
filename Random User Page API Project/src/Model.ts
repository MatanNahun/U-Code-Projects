console.log("Model");

class Model{
    const personData= $.get( "https://randomuser.me/api/")
    
    constructor(personData){
        this.personData = personData

    }
}

// $.ajax({
//   url: "https://randomuser.me/api/",
//   dataType: "json",
//   success: function (data) {
//     console.log(data);
//   },
// });

$.get("https://randomuser.me/api/").then{data => console.log(data)

}
