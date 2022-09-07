class About {
  text: string;
  constructor() {
    this.text = "AboutText";
  }

  initAbout() {
    var $about = $(this); // get access to about with closure
    return $.ajax({
      url: "https://baconipsum.com/api/?type=all-meat&sentences=8",
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
