$(document).ready(function(){

  //set variables for url
  var url ="";

  //pull location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        //$("#location").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);

        url = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude +"&APPID=647139742b6f938ad3a17203330d6ea3";

        console.log(url);

        //make API request for weather at location from openweathermap
        $.getJSON(url, function(weather){

        //switch statments to assign #skies based on result of weather.main

        //convert main.temp to Fahrenheit and assign o #temp
        $("#temp").html(weather.main.temp * 9 / 5 - 459.67);

        //assign name to #location
        $("#location").html(weather.name);

        //if, else if, else statements to assign classes that match weather

        //toggle button: Fahrenheit to Celsius using formula

    });

      });
    }
});
