$(document).ready(function(){

  //set variables for long & lat to plug into url variable
  var longitude;
  var latitude;

  //pull location
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#location").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
  });
}

  //variable to write url ending for lat & lon returned from geolocation
  var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +"?APPID=647139742b6f938ad3a17203330d6ea3";

  console.log(url);
  //make API request for weather at location from openweathermap
  $.getJSON(url, function(weather){


  //switch statments to assign #skies based on result of weather.main

  //convert main.temp to Fahrenheit and assign o #temp
  $("#temp").html(main.temp * 9 / 5 - 459.67);
  //assign name to #location
  $("#location").html(name);
  //if, else if, else statements to assign classes that match weather

  });

  //toggle button: Fahrenheit to Celsius using formula
});
