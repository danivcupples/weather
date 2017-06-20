$(document).ready(function(){

  //set variables for url
  var url ="";

  //pull location
  if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position) {
         console.log(position);
        url = "https://api.wunderground.com/api/ca00d92ec76f700b/geolookup/q/" + position.coords.latitude +","+ position.coords.longitude +".json";

        console.log(url);

        //make API request for weather at location from openweathermap
        $.getJSON(url, function(forecast){

          //assign name to #location
          $("#location").html(forecast.location.city + ", " + forecast.location.state);

        $.getJSON("https://api.wunderground.com/api/ca00d92ec76f700b/conditions/q/" + forecast.location.state + "/" + forecast.location.city + ".json", function(conditions){
          console.log(conditions);
          console.log(conditions.current_observation.weather);
          //assign icon to #weather-icon
          //var iconUrl = "http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png";
          //console.log(iconUrl);

          $("#weather-icon").html("<img alt='current weather icon' class='img-responsive' src='"+ iconUrl + "'>")

          //assign #skies based on result of weather.main & weather.description
          $("#skies").html(conditions.current_observation.weather);

          //convert main.temp to Fahrenheit and assign o #temp
          $("#temp").html(Math.round((forecast.currently.temperature ) * 10)/10 + "&#176");

          //assign #tempCelsius
          $("#tempCelsius").html(Math.round(((forecast.currently.temperature - 32) * 5 / 9)*10)/10 + "&#176");

          //assign #humidity
          $("#humidity").html(forecast.currently.humidity);
        })


        //if, else if, else statements to assign classes that match weather

        //toggle button: Fahrenheit to Celsius using formula
        $("button").click(function(){
          $(".temperature p").toggle();
        })
    //});

      });
    });
  }
});
