var nextF = function() {
var limit = state.data.length - 1;
if(state.count + 1 > limit){
 state.count = 0;
} else {
 state.count = state.count + 1;
}
return state.data[state.count];
};

var prevF = function() {
if(state.count - 1 <0){
state.count = state.data.length - 1;
} else {
state.count= state.count -1;
}
return state.data[state.count];
};

var changeColor = function(fruitObject) {
if (fruitObject.color ==="yellow") {
return "#FFC125";
}
else if (fruitObject.color === "red") {
return " red";
}
else if (fruitObject.color === "green") {
return "green";
}
};

var setStyle = function(fruitObject) {
  $('body').css('background-color', getHexColor(fruitObject));
  $('#name').text('fruitObject'), getHexColor();
};

$("#nextF").click(function(ev));
