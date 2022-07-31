//global query selectors
//button link to html
var submitCityButton = document.querySelector('.submitCityButton');

//input link to html
var cityInput = document.querySelector('.citySearch');
//city header link to html
var cityName = document.querySelector('.name');
//city temp link to html
var cityTemp = document.querySelector('.temperature');
//city wind link to html
var cityWind = document.querySelector('.wind');
//city humidity link to html
var cityHumidity = document.querySelector('.humidity');
//city UV-Index link to html
var cityUVIndex = document.querySelector('.UV-Index');



//city name api link
//function to make link dynamic
 submitCityButton.addEventListener('click', function() {
    var cityName = cityInput.value;
    console.log(cityInput.value);
    getCityName(cityName);


})
//var locationLink = 'https://api.openweathermap.org/data/3.0/onecall?lat=' + lat + '&lon=' + long + '&appid=6b089db5e12bcc8e35e3e9236791aef9'

//fetch Latitude and Longitude 
function getLandLLocation(lat, long) {
  var locationLink = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&appid=6b089db5e12bcc8e35e3e9236791aef9'
    fetch(locationLink)
    .then(response => response.json())
    .then(function (data) {
      console.log(data)
      //taken values from json

      //get temp value from api for today
      var tempNum = data.current.temp;
      //Get change temp from kelvin to far.

      //Need to add the degrees F symbol
      var tempFar = ((tempNum - 273.15)*9/5 + 32).toFixed(2) + ' ºF';
      cityTemp.textContent += tempFar;
      console.log(cityTemp);

      //get wind speed value from api
      var windNum = data.current.wind_speed + ' MPH';
      cityWind.textContent += windNum;
      console.log(cityWind);
      
      //get humidity value from api
      var humidityNum = data.current.humidity + ' %';
      cityHumidity.textContent += humidityNum;
      console.log(cityHumidity);

      //get UV Index value from api 
      var UVIndexNum = data.current.uvi;
      cityUVIndex.textContent += UVIndexNum;
      console.log(cityUVIndex);

      


    })
    .catch(err => console.error(err));

}
//city api link
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=6b089db5e12bcc8e35e3e9236791aef9


var apiKey = "6b089db5e12bcc8e35e3e9236791aef9";

//reference
function getCityName(cityName) {
    var cityCall = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName +  '&appid=6b089db5e12bcc8e35e3e9236791aef9'
    console.log(cityCall);
    fetch(cityCall)
    // .then(response => console.log(response))
      .then(response => response.json())
    //   .then(response => console.log(response))
      .then(function (data) {
        console.log(data)
        //taken values from json
        var lat = data.coord.lat;
        var long = data.coord.lon;
        getLandLLocation(lat, long)
      })
    //.then(response => renderCityInfo(response)
      .catch(err => console.error(err));
  
  }

//Render city info
function renderCityInfo(response){
    //access elements within respnse.json 
    // print elements into html section card
}
