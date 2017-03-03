/* ================================
Week 6 Assignment: Basic Application

Take a look at the midterm prototype: https://marvelapp.com/bf2c9h/screen/10434841
Try clicking on the "Next" and "Previous" buttons. This task will ask you to write some functions
that will enable us to write an application like in the midterm.

Write three functions: clickNextButton, clickPreviousButton, and saySlideName.
clickNextButton and clickPreviousButtons should simulate what will happen when someone clicks
on a next or previous button in your application.

You don't need to create HTML buttons or a useable application—this exercise is asking you to create
functions that will be used in your application. To test it out, try calling the functions in your
console. For example, try running: clickNextButton() and see what it does. Use lots of console logs!
================================ */

// var farmerSet = "http://data.phl.opendata.arcgis.com/datasets/0707c1f31e2446e881d680b0a5ee54bc_0.geojson";
console.log(farmerSet);
var featureGroup;
var gJ= L.geoJSON(farmerSet);
console.log(gJ);
gJ.addTo(map);



// slideNumber keeps track of what slide you are on. It should increase when you
// click the next button and decrease when you click the previous button. It
// should never get so large that it is bigger than the dataset. It should never
// get so small that it is smaller than 0.

var slide = [
  {
    title: "Philadelphia Farmers Markets",
    id: "slide1"
  },
  {
    title: "Which Days of the Week Are they Open?",
    id: "slide2"
  },
  {
    title: "What Times are they Open?",
    id: "slide3"
  },
  {
    title: "What Months are they Open?",
    id: "slide4"
  },
  {
    title: "What Months are they Open?",
    id: "slide5"
  }
];
console.log(slide[2].id);

      // state.slide1.slideNumber
      var clickNextButton = function(slide) {
      for(i = 0; i < slide.length; i ++)
        if(slide[i].id >= 0 && slide[i].id < 5) {
         slide[i].id = slide[i].id + 1;
        }
        return slide[i].id;
      };
        console.log(clickNextButton);

var clickNextButton = function(nextButton) {
  for(i = 0; i < slide.length; i ++)
  if (state.slideNumber >=1 && state.slideNumber < 5) {
    state.slideNumber = state.slideNumber + 1;
  }
console.log("Slide Number:", state.slideNumber);
};
var clickPreviousButton = function(previousButton) {
 if(state.slideNumber > 1) {
   state.slideNumber = state.slideNumber -1;
 }
 console.log("Slide Number:", state.slideNumber);
};

var saySlideName = function(state) {
  var slideName = state.slideNumber;
  console.log("Slide Number:", slideName);
  // saySlideName uses console.log to "say" the name of the slide it is given. It should run when
  // someone clicks on one of the buttons.
};
