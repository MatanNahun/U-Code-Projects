"use strict";
class About {
    constructor() {
        this.text = "AboutText";
    }
    initAbout() {
        var $about = $(this); // get access to about with closure
        $.ajax({
            url: "https://baconipsum.com/api/?type=meat-and-filler",
            dataType: "json",
            success: function (baconData) {
                $about[0].text = baconData;
                // console.log($about[0]);
            },
        });
    }
}
// const about1 = new About();
// about1.initAbout();
