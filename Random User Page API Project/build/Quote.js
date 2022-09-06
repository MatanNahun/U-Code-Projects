"use strict";
class Quote {
    constructor() {
        this.text = "QuoteText";
    }
    initQuote() {
        var $quote = $(this); // get access to model with closure
        $.ajax({
            url: "https://api.kanye.rest",
            dataType: "json",
            success: function (kanyeData) {
                const quote = kanyeData.quote;
                $quote[0].text = quote;
                // console.log($quote[0]);
            },
        });
    }
}
// const quote1 = new Quote();
// quote1.initQuote();
