"use strict";
class Quote {
    constructor() {
        this.text = "QuoteText";
    }
    initQuote() {
        var $quote = $(this); // get access to quote with closure
        return $.ajax({
            url: "https://api.kanye.rest",
            dataType: "json",
            success: function (kanyeData) {
                const quote = kanyeData.quote;
                $quote[0].text = quote;
            },
        });
    }
}
