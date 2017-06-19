$(document).ready(function(){

  //set variables for url
  var url ="";

  //pull location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        //$("#location").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);

        url = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude +"&units=imperial&APPID=647139742b6f938ad3a17203330d6ea3";

        console.log(url);

        //make API request for weather at location from openweathermap
        $.getJSON(url, function(currentWeather){

        //assign icon to #weather-icon
        var iconUrl = "http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png";
        console.log(iconUrl);

        $("#weather-icon").html("<img alt='current weather icon' class='img-responsive' src='"+ iconUrl + "'>")

        //assign #skies based on result of weather.main & weather.description
        $("#skies").html(currentWeather.weather[0].description);

        //convert main.temp to Fahrenheit and assign o #temp
        $("#temp").html(Math.round((currentWeather.main.temp ) * 10)/10 + "&#176");

        //assign #tempCelsius
        $("#tempCelsius").html(Math.round(((currentWeather.main.temp - 32) * 5 / 9)*10)/10 + "&#176");

        //assign #humidity
        $("#humidity").html(currentWeather.main.humidity);

        //assign name to #location
        $("#location").html(currentWeather.name);

        //if, else if, else statements to assign classes that match weather

        //toggle button: Fahrenheit to Celsius using formula
        $("button").click(function(){
          $(".temperature p").toggle();
        })
    });

      });
    }
});
