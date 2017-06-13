$(document).ready(function(){
  //pull location
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#location").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
}

  //variable to write url ending for lat & lon returned from geolocation

  //make API request for weather at location from openweathermap

  //switch statments to assign #skies based on result of weather.main

  //convert main.temp to Fahrenheit and assign o #temp

  //assign name to #location

  //if, else if, else statements to assign classes that match weather

  //toggle button: Fahrenheit to Celsius using formula
});
