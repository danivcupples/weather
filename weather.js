$(document).ready(function(){

  //set variables for url
  var url ="";

  //pull location
  if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position) {

        url = "https://api.darksky.net/forecast/62f9dc2eac7a8f315e007e9fb0f3c3ae/" + position.coords.latitude +","+ position.coords.longitude;

        console.log(url);

        //make API request for weather at location from openweathermap
        $.getJSON(url, function(currentWeather){

        //assign icon to #weather-icon
        var iconUrl = "http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png";
        console.log(iconUrl);

        $("#weather-icon").html("<img alt='current weather icon' class='img-responsive' src='"+ iconUrl + "'>")

        //assign #skies based on result of weather.main & weather.description
        $("#skies").html(currentWeather.currently.summary);

        //convert main.temp to Fahrenheit and assign o #temp
        $("#temp").html(Math.round((currentWeather.currently.temperature ) * 10)/10 + "&#176");

        //assign #tempCelsius
        $("#tempCelsius").html(Math.round(((currentWeather.currently.temperature - 32) * 5 / 9)*10)/10 + "&#176");

        //assign #humidity
        $("#humidity").html(currentWeather.currently.humidity);

        //assign name to #location
        $("#location").html(position.city);

        //if, else if, else statements to assign classes that match weather

        //toggle button: Fahrenheit to Celsius using formula
        $("button").click(function(){
          $(".temperature p").toggle();
        })
    });

      });
    }
});
