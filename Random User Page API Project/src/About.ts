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
      },
    });
  }
}
