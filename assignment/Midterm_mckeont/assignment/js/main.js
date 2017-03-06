var map;

var layerPlottedMarkers;
// MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP
$(document).ready(function() {
  map = L.map('map', {
    center: [39.9522, -75.1639],
    zoom: 14
  });

  var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
  }).addTo(map);
  // Add some GeoJSON
  var marker = L.marker([39.9522, -75.1639]);
  var popUp = "Ima Pickle Stand!";
  var popUp2 = "New message?";
  marker.bindPopup(popUp);
  marker.addTo(map);
  layerPlottedMarkers = L.geoJSON(farmerSet).bindPopup(popUp).addTo(map);
  console.log(layerPlottedMarkers);

  // SLIDE 1: Philadelphia Farmers Markets

  $("#next1").click(function(){
     $("#slide1").css("z-index","-1");
     $("#slide2").css("z-index", "1");
     $("#slide3 #slide4 #slide5").css("z-index", 0);
    //  map.setView([39.9522, -75.1939]);
  map.setZoom(12);
    console.log(layerPlottedMarkers);

     if(layerPlottedMarkers){
       map.removeLayer(layerPlottedMarkers);
      //  layerPlottedMarkers = new Object();
     }
     layerPlottedMarkers = sat.addTo(map).bindPopup(popUp);

  });
//  SLIDE 2  Center City

  $("#next2").click(function(){
     $("#slide2").css("z-index","-1");
     $("#slide3").css("z-index", "1");
     $("#slide1 #slide4 #slide5").css("z-index", 0);
     map.setView([39.9522, -75.1639]);
     map.setZoom(14);
    if(layerPlottedMarkers){
      map.removeLayer(layerPlottedMarkers);
     //  layerPlottedMarkers = new Object();
    }

    layerPlottedMarkers = centerMarkets.addTo(map);

    //  console.log(layerPlottedMarkers.length);


  });
// SLIDE 4 + Which Months are they Open?
  $("#next3").click(function(){
     $("#slide3").css("z-index","-1");
     $("#slide4").css("z-index", "1");
     $("#slide1 #slide2 #slide5").css("z-index", 0);
     map.setView([39.924482125, -75.16313552]);
     map.setZoom(13);
      if(layerPlottedMarkers){
        map.removeLayer(layerPlottedMarkers);
       //  layerPlottedMarkers = new Object();
      }

      layerPlottedMarkers = south.addTo(map);

  });
// Slide 5 Accept Snap Access?
  $("#next4").click(function(){
     $("#slide4").css("z-index","-1");
     $("#slide5").css("z-index", "1");
     $("#slide1 #slide2 #slide3").css("z-index", 0);
     map.setView([39.9522, -75.1639]);
     map.setZoom(13);
      if(layerPlottedMarkers){
        map.removeLayer(layerPlottedMarkers);
       //  layerPlottedMarkers = new Object();
      }

      layerPlottedMarkers = snapAccess.addTo(map);

  });
  //
  $("#prev2").click(function(){
     $("#slide1").css("z-index","1");
     $("#slide2").css("z-index", "-1");
     $("#slide3 #slide4 #slide5").css("z-index", 0);
     map.setView([39.9522, -75.1639]);
     map.setZoom(14);
    if(layerPlottedMarkers){
      map.removeLayer(layerPlottedMarkers);
     //  layerPlottedMarkers = new Object();
    }

  layerPlottedMarkers = L.geoJSON(farmerSet).bindPopup(popUp).addTo(map);

  });

  $("#prev3").click(function(){
    $("#slide2").css("z-index","1");
    $("#slide3").css("z-index", "-1");
    $("#slide1 #slide4 #slide5").css("z-index", 0);
    map.setView([39.9522, -75.1639]);
    map.setZoom(14);
    if(layerPlottedMarkers){
      map.removeLayer(layerPlottedMarkers);
     //  layerPlottedMarkers = new Object();
    }
    layerPlottedMarkers = sat.addTo(map);
  });

  $("#prev4").click(function(){
     $("#slide3").css("z-index","1");
     $("#slide4").css("z-index", "-1");
     $("#slide1 #slide2 #slide3").css("z-index", 0);
     map.setView([39.9522, -75.1639]);
     map.setZoom(14);
     if(layerPlottedMarkers){
       map.removeLayer(layerPlottedMarkers);
      //  layerPlottedMarkers = new Object();
     }

     layerPlottedMarkers = centerMarkets.addTo(map);
  });

  $("#prev5").click(function(){
     $("#slide4").css("z-index","1");
     $("#slide5").css("z-index", "-1");
     $("#slide1 #slide2 #slide3").css("z-index", 0);
     map.setView([39.924482125, -75.16313552]);
     map.setZoom(13);
      if(layerPlottedMarkers){
        map.removeLayer(layerPlottedMarkers);
       //  layerPlottedMarkers = new Object();
      }

      layerPlottedMarkers = south.addTo(map);
  });

});
