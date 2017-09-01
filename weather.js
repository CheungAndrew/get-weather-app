$(document).ready(function() {

    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var city = "London";
    var country = "uk";
    var apiKey ="&appid=782baf5721afe320477b796dedba34f7";
    var units = "&units=metric";
    var url = api + city + "," + country + apiKey + units;

    $("button#submit").click(function() {
        $.getJSON(url, function(data) {
            alert("Works");
        })
    });

});