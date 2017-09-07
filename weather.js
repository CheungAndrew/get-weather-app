$(document).ready(function () {

    // Variables to create API URL
    const api = "https://api.openweathermap.org/data/2.5/";
    const weather = "weather?";
    const forecast = "forecast?";
    const apiKey = "&appid=782baf5721afe320477b796dedba34f7";
    const units = "&units=metric";

    // Submit button for City
    $("button#submitCity").click(function () {
        // Getting city value from user
        var city = document.getElementById("city").value;

        // Creating API URL for current weather
        var urlWeather = api + weather + "q=" + city + apiKey + units;

        // Show Temperature
        $.getJSON(urlWeather, function (weatherData) {
            $(".temp").html(weatherData.name + `<br><img class='img-fluid' src='http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png' width='90rem;'><br>${weatherData.main.temp}&deg;C`);
            tempStyle();
        });

        // Creating API URL for forecast
        var urlForecast = api + forecast + "q=" + city + apiKey + units;

        // Show Forecast
        $.getJSON(urlForecast, function (forecastData) {
            for(var i = 0; i < 12; i++) {
                $(`.forecast${i}`).html(forecastData.list[i].dt_txt + `<br><img class='img-fluid' src='http://openweathermap.org/img/w/${forecastData.list[i].weather[0].icon}.png' width='70rem;'><br>${forecastData.list[i].main.temp}&deg;C`);
            }
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
            $(".temp").html(zip + `<br><img class='img-fluid' src='http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png' width='90rem;'><br>${weatherData.main.temp}&deg;C`);
            tempStyle();
        });

        // Creating API URL for forecast
        var urlForecast = api + forecast + "zip=" + zip + apiKey + units;

        // Show Forecast
        $.getJSON(urlForecast, function (forecastData) {
            for(var i = 0; i < 12; i++) {
                $(`.forecast${i}`).html(forecastData.list[i].dt_txt + `<br><img class='img-fluid' src='http://openweathermap.org/img/w/${forecastData.list[i].weather[0].icon}.png' width='70rem;'><br>${forecastData.list[i].main.temp}&deg;C`);
            }
            forecastTempStyle();
        });
    });
});

var tempStyle = function () {
    $(".temp").css("font-size", "3rem");
};

var forecastTempStyle = function() {
    for(var i = 0; i < 12; i++) {
        $(`.forecast${i}`).css("font-size", "1.3rem");
    }
}