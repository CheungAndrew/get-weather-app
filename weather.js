$(document).ready(function () {

    // Variables to create API URL
    var api = "https://api.openweathermap.org/data/2.5/";
    var weather = "weather?";
    var forecast = "forecast?";
    var apiKey = "&appid=782baf5721afe320477b796dedba34f7";
    var units = "&units=metric";

    // Submit button for City
    $("button#submitCity").click(function () {
        // Getting city value from user
        var city = document.getElementById("city").value;

        // Creating API URL for current weather
        var urlWeather = api + weather + "q=" + city + apiKey + units;

        // Show Temperature
        $.getJSON(urlWeather, function (weatherData) {
            $(".temp").html(weatherData.name + "<br><img src='http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png' width='90rem;'><br>" +  weatherData.main.temp + "&deg;C");
            tempStyle();
        });

        // Creating API URL for forecast
        var urlForecast = api + forecast + "q=" + city + apiKey + units;

        // Show Forecast
        $.getJSON(urlForecast, function (forecastData) {
            $(".forecast1").html(forecastData.list[0].dt_txt + "<br><img src='http://openweathermap.org/img/w/" + forecastData.list[0].weather[0].icon + ".png' width='70rem;'><br>" + forecastData.list[0].main.temp + "&deg;C");
            $(".forecast2").html(forecastData.list[8].dt_txt + "<br><img src='http://openweathermap.org/img/w/" + forecastData.list[8].weather[0].icon + ".png' width='70rem;'><br>" + forecastData.list[8].main.temp + "&deg;C");
            $(".forecast3").html(forecastData.list[16].dt_txt + "<br><img src='http://openweathermap.org/img/w/" + forecastData.list[16].weather[0].icon + ".png' width='70rem;'><br>" + forecastData.list[16].main.temp + "&deg;C");
            $(".forecast4").html(forecastData.list[24].dt_txt + "<br><img src='http://openweathermap.org/img/w/" + forecastData.list[24].weather[0].icon + ".png' width='70rem;'><br>" + forecastData.list[24].main.temp + "&deg;C");
            $(".forecast5").html(forecastData.list[32].dt_txt + "<br><img src='http://openweathermap.org/img/w/" + forecastData.list[32].weather[0].icon + ".png' width='70rem;'><br>" + forecastData.list[32].main.temp + "&deg;C");
            forecastTempStyle();
        });



    });

    // Submit button for ZIP Code
    $("button#submitZIP").click(function () {
        // Getting city value from user
        var zip = document.getElementById("zip").value;

        // Creating API URL
        var url = api + weather + "zip=" + zip + apiKey + units;

        // Show Temperature
        $.getJSON(url, function (weatherData) {
            $(".temp").html(zip + "<br><img src='http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png' width='90rem;'><br>" + weatherData.main.temp + "&deg;C");
            tempStyle();
        });

        // Creating API URL for forecast
        var urlForecast = api + forecast + "zip=" + zip + apiKey + units;

        // Show Forecast
        $.getJSON(urlForecast, function (forecastData) {
            $(".forecast1").html(forecastData.list[0].dt_txt + "<br><img src='http://openweathermap.org/img/w/" + forecastData.list[0].weather[0].icon + ".png' width='70rem;'><br>" + forecastData.list[0].main.temp + "&deg;C");
            $(".forecast2").html(forecastData.list[8].dt_txt + "<br><img src='http://openweathermap.org/img/w/" + forecastData.list[8].weather[0].icon + ".png' width='70rem;'><br>" + forecastData.list[8].main.temp + "&deg;C");
            $(".forecast3").html(forecastData.list[16].dt_txt + "<br><img src='http://openweathermap.org/img/w/" + forecastData.list[16].weather[0].icon + ".png' width='70rem;'><br>" + forecastData.list[16].main.temp + "&deg;C");
            $(".forecast4").html(forecastData.list[24].dt_txt + "<br><img src='http://openweathermap.org/img/w/" + forecastData.list[24].weather[0].icon + ".png' width='70rem;'><br>" + forecastData.list[24].main.temp + "&deg;C");
            $(".forecast5").html(forecastData.list[32].dt_txt + "<br><img src='http://openweathermap.org/img/w/" + forecastData.list[32].weather[0].icon + ".png' width='70rem;'><br>" + forecastData.list[32].main.temp + "&deg;C");
            forecastTempStyle();
        });
    });
});

var tempStyle = function () {
    $(".temp").css("font-size", "3rem");
};

var forecastTempStyle = function() {
    $(".forecast1, .forecast2, .forecast3, .forecast4, .forecast5").css("font-size", "1.3rem");
}