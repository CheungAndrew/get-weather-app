$(document).ready(function() {

    // Variables to create API URL
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var apiKey ="&appid=782baf5721afe320477b796dedba34f7";
    var units = "&units=metric";

    
    $("button#submit").click(function() {
        // Getting city value from user
        var city = document.getElementById("city").value;
        // Creating API URL
        var url = api + city + apiKey + units;

        // Show Temperature
        $.getJSON(url, function(weatherData) {
            $(".temp").html(weatherData.main.temp + "&deg;C");
        });
    });

});