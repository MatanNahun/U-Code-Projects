"use strict";
console.log("Render");
class Render {
    renderUser(user) {
        const sourceUserInfo = $("#user-template").html();
        const template = Handlebars.compile(sourceUserInfo);
        let userInfo = template({
            firstName: user.firstName,
            lastName: user.lastName,
            city: user.city,
            state: user.state,
            pictureURL: user.pictureURL,
        });
        $(".user-container").append(userInfo);
    }
    renderFriends(friends) {
        const sourceFriends = $("#friends-template").html();
        const template = Handlebars.compile(sourceFriends);
        for (let friend of friends) {
            let userFriend = template({ friend });
            $(".friends").append(userFriend);
        }
    }
}
// const modelToRender = new Model();
// console.log(modelToRender.user);
// const Render1 = new Render();
// Render1.renderUser(modelToRender.user);
