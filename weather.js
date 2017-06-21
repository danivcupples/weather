$(document).ready(function(){

  //pull location
  if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position) {

        //make API request for weather at location from openweathermap
        $.getJSON("https://api.wunderground.com/api/ca00d92ec76f700b/geolookup/q/" + position.coords.latitude +","+ position.coords.longitude +".json", function(forecast){

          //assign name to #location
          $("#location").html(forecast.location.city + ", " + forecast.location.state);

        //getJSON request to weather underground
        $.getJSON("https://api.wunderground.com/api/ca00d92ec76f700b/conditions/q/" + forecast.location.state + "/" + forecast.location.city + ".json", function(conditions){

          //pull appropriate icon and assign to #weather-icon
          $("#weather-icon").html("<img alt='current weather icon' class='img-responsive' src='https://icons.wxug.com/i/c/i/"+ conditions.current_observation.icon + ".gif'>")

          //assign #skies based on result of weather.main & weather.description
          $("#skies").html(conditions.current_observation.weather);

          //convert main.temp to Fahrenheit and assign to #temp
          $("#temp").html(conditions.current_observation.temp_f + " &deg;F");

          //assign #tempCelsius
          $("#tempCelsius").html(conditions.current_observation.temp_c + " &deg;C");

          //assign #humidity
          $("#humidity").html(conditions.current_observation.relative_humidity);
        })

        //toggle button: Fahrenheit to Celsius using formula
        $("button").click(function(){
          $(".temperature p").toggle();
        })
    //});

      });
    });
  }
});
