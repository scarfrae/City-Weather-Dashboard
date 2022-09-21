//global query selectors
//button link to html
var submitCityButton = document.querySelector('.submitCityButton');
//city name
var displayCards = document.querySelector('.displayDailyForcast')
//input link to html
var cityInput = document.querySelector('.citySearch');
//city header link to html
var cityNameValue = document.querySelector('.name');
//dayOne header link to html
var dayValueOne = document.querySelector('.day1');
//dayTwo header link to html
var dayValueTwo = document.querySelector('.day2');
//dayThree header link to html
var dayValueThree = document.querySelector('.day3');
//dayFour header link to html
var dayValueFour = document.querySelector('.day4');
//dayFive header link to html
var dayValueFive = document.querySelector('.day5');

//city temp link to html
var cityTemp = document.querySelector('.temperature_0');
//city wind link to html
var cityWind = document.querySelector('.wind_0');
//city humidity link to html
var cityHumidity = document.querySelector('.humidity_0');
//city UV-Index link to html
var cityUVIndex = document.querySelector('.UV-Index_0');
//city UVColor link to html
var UVColor = document.querySelector('.UV-Color_0');

//day 1 temp link to html
var dayOneTemp = document.querySelector('.temperature_1');
//day 1 wind link to html
var dayOneWind = document.querySelector('.wind_1');
//day 1 humidity link to html
var dayOneHumidity = document.querySelector('.humidity_1');
//day 1 UV-Index link to html
var dayOneUVIndex = document.querySelector('.UV-Index_1');
//day 1 UVColor link to html
var dayOneUVColor = document.querySelector('.UV-Color_1');

//day 2 temp link to html
var dayTwoTemp = document.querySelector('.temperature_2');
//day 2 wind link to html
var dayTwoWind = document.querySelector('.wind_2');
//day 2 humidity link to html
var dayTwoHumidity = document.querySelector('.humidity_2');
//day 2 UV-Index link to html
var dayTwoUVIndex = document.querySelector('.UV-Index_2');
//day 1 UVColor link to html
var dayTwoUVColor = document.querySelector('.UV-Color_2');

//day 3 temp link to html
var dayThreeTemp = document.querySelector('.temperature_3');
//day 3 wind link to html
var dayThreeWind = document.querySelector('.wind_3');
//day 3 humidity link to html
var dayThreeHumidity = document.querySelector('.humidity_3');
//day 3 UV-Index link to html
var dayThreeUVIndex = document.querySelector('.UV-Index_3');
//day 3 UVColor link to html
var dayThreeUVColor = document.querySelector('.UV-Color_3');

//day 4 temp link to html
var dayFourTemp = document.querySelector('.temperature_4');
//day 4 wind link to html
var dayFourWind = document.querySelector('.wind_4');
//day 4 humidity link to html
var dayFourHumidity = document.querySelector('.humidity_4');
//day 4 UV-Index link to html
var dayFourUVIndex = document.querySelector('.UV-Index_4');
//day 4 UVColor link to html
var dayFourUVColor = document.querySelector('.UV-Color_4');

//day 5 temp link to html
var dayFiveTemp = document.querySelector('.temperature_5');
//day 5 wind link to html
var dayFiveWind = document.querySelector('.wind_5');
//day 5 humidity link to html
var dayFiveHumidity = document.querySelector('.humidity_5');
//day 5 UV-Index link to html
var dayFiveUVIndex = document.querySelector('.UV-Index_5');
//day 5 UVColor link to html
var dayFiveUVColor = document.querySelector('.UV-Color_5');


//city name api link
//function to make link dynamic
 submitCityButton.addEventListener('click', function() {
    var cityName = cityInput.value;
    // console.log(cityInput.value);
    getCityName(cityName);


})

//fetch Latitude and Longitude 
function getLandLLocation(lat, long) {
  var locationLink = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&appid=6b089db5e12bcc8e35e3e9236791aef9'
    fetch(locationLink)
    .then(response => response.json())
    .then(function (data) {
      
    //Current Day
      //get temp value from api for today
      var tempNum = data.current.temp;
      //Get change temp from kelvin to far.

      //Need to add the degrees F symbol
      var tempFar = ((tempNum - 273.15)*9/5 + 32).toFixed(2) + ' ºF';
      cityTemp.textContent = tempFar;

      //get wind speed value from api
      var windNum = data.current.wind_speed + ' MPH';
      cityWind.textContent = windNum;
      
      //get humidity value from api
      var humidityNum = data.current.humidity + ' %';
      cityHumidity.textContent = humidityNum;

      //get UV Index value from api 
      var UVIndexNum = data.current.uvi;
      cityUVIndex.textContent = UVIndexNum;

      //if statements to set text background to color based on UV num.
      if(UVIndexNum <= 2) {
        cityUVIndex.classList.add("lowUV")
    
      }
      else if(3 <= UVIndexNum < 5) {
        cityUVIndex.classList.add("moderateUV")
       
      }
      else if(6 <= UVIndexNum < 7) {
        cityUVIndex.classList.add("highUV")
 
      }
      else if(8 <= UVIndexNum < 10) {
        cityUVIndex.classList.add("veryHighUV")

      }
    //day 1
       var dayOne = new Date(data.daily[1].dt*1000).toLocaleDateString();

       dayValueOne.textContent = dayOne;
        
        var tempNumOne = data.daily[1].temp.day;

        //Need to add the degrees F symbol
        var tempFarOne = ((tempNumOne - 273.15)*9/5 + 32).toFixed(2) + ' ºF';
        dayOneTemp.textContent = tempFarOne;

        //get wind speed value from api
        var windNumOne = data.daily[1].wind_speed + ' MPH';
        dayOneWind.textContent = windNumOne;
        
        //get humidity value from api
        var humidityNumOne = data.daily[1].humidity + ' %';
        dayOneHumidity.textContent = humidityNumOne;

        //get UV Index value from api 
        var UVIndexNumOne = data.daily[1].uvi;
        dayOneUVIndex.textContent = UVIndexNumOne;
        
        //if statements to set text background to color based on UV num.
        if(UVIndexNumOne <= 2) {
          dayOneUVIndex.classList.add("lowUV")

        }
        else if(3 <= UVIndexNumOne < 5) {
          dayOneUVIndex.classList.add("moderateUV")

        }
        else if(6 <= UVIndexNumOne < 7) {
          dayOneUVIndex.classList.add("highUV")

        }
        else if(8 <= UVIndexNumOne < 10) {
          dayOneUVIndex.classList.add("veryHighUV")

        }
        
    //day 2
       var dayTwo = new Date(data.daily[2].dt*1000).toLocaleDateString();

       dayValueTwo.textContent = dayTwo;

          var tempNumTwo = data.daily[2].temp.day;
       
          var tempFarTwo = ((tempNumTwo - 273.15)*9/5 + 32).toFixed(2) + ' ºF';
          dayTwoTemp.textContent = tempFarTwo;

          var windNumTwo = data.daily[2].wind_speed + ' MPH';
          dayTwoWind.textContent = windNumTwo;
          
          //get humidity value from api
          var humidityNumTwo = data.daily[2].humidity + ' %';
          dayTwoHumidity.textContent = humidityNumTwo;

          //get UV Index value from api 
          var UVIndexNumTwo = data.daily[2].uvi;
          dayTwoUVIndex.textContent = UVIndexNumTwo;
    
          //if statements to set text background to color based on UV num.
          if(UVIndexNumTwo <= 2) {
            dayTwoUVIndex.classList.add("lowUV")

          }
          else if(3 <= UVIndexNumTwo < 5) {
            dayTwoUVIndex.classList.add("moderateUV")

          }
          else if(6 <= UVIndexNumTwo < 7) {
            dayTwoUVIndex.classList.add("highUV")

          }
          else if(8 <= UVIndexNumTwo < 10) {
            dayTwoUVIndex.classList.add("veryHighUV")

          }

    //day 3
       var dayThree = new Date(data.daily[3].dt*1000).toLocaleDateString();

       dayValueThree.textContent = dayThree;

          //get temp value from api for 
          var tempNumThree = data.daily[3].temp.day;
          //Get change temp from kelvin to far.

          //Need to add the degrees F symbol
          var tempFarThree = ((tempNumThree - 273.15)*9/5 + 32).toFixed(2) + ' ºF';
          dayThreeTemp.textContent = tempFarThree;

          //get wind speed value from api
          var windNumThree = data.daily[3].wind_speed + ' MPH';
          dayThreeWind.textContent = windNumThree;
          
          //get humidity value from api
          var humidityNumThree = data.daily[3].humidity + ' %';
          dayThreeHumidity.textContent = humidityNumThree;

          //get UV Index value from api 
          var UVIndexNumThree = data.daily[3].uvi;
          dayThreeUVIndex.textContent = UVIndexNumThree;
        
          //if statements to set text background to color based on UV num.
          if(UVIndexNumThree <= 2) {
            dayThreeUVIndex.classList.add("lowUV")

          }
          else if(3 <= UVIndexNumThree < 5) {
            dayThreeUVIndex.classList.add("moderateUV")

          }
          else if(6 <= UVIndexNumThree < 7) {
            dayThreeUVIndex.classList.add("highUV")

          }
          else if(8 <= UVIndexNumThree < 10) {
            dayThreeUVIndex.classList.add("veryHighUV")

          }

    //day 4
       var dayFour = new Date(data.daily[4].dt*1000).toLocaleDateString();

       dayValueFour.textContent = dayFour;

        var tempNumFour = data.daily[4].temp.day;
     
        var tempFarFour = ((tempNumFour - 273.15)*9/5 + 32).toFixed(2) + ' ºF';
        dayFourTemp.textContent = tempFarFour;

        //get wind speed value from api
        var windNumFour = data.daily[4].wind_speed + ' MPH';
        dayFourWind.textContent = windNumFour;
        
        //get humidity value from api
        var humidityNumFour = data.daily[4].humidity + ' %';
        dayFourHumidity.textContent = humidityNumFour;

        //get UV Index value from api 
        var UVIndexNumFour = data.daily[4].uvi;
        dayFourUVIndex.textContent = UVIndexNumFour;
  
        //if statements to set text background to color based on UV num.
        if(UVIndexNumFour <= 2) {
          dayFourUVIndex.classList.add("lowUV")

        }
        else if(3 <= UVIndexNumFour < 5) {
          dayFourUVIndex.classList.add("moderateUV")

        }
        else if(6 <= UVIndexNumFour < 7) {
          dayFourUVIndex.classList.add("highUV")

        }
        else if(8 <= UVIndexNumFour < 10) {
          dayFourUVIndex.classList.add("veryHighUV")

        }


    //day 5
       var dayFive = new Date(data.daily[5].dt*1000).toLocaleDateString();

       dayValueFive.textContent = dayFive;

         
          var tempNumFive = data.daily[5].temp.day;
      
          var tempFarFive = ((tempNumFive - 273.15)*9/5 + 32).toFixed(2) + ' ºF';
          dayFiveTemp.textContent = tempFarFive;
         
  
          //get wind speed value from api
          var windNumFive = data.daily[5].wind_speed + ' MPH';
          dayFiveWind.textContent = windNumFive;
        
          
          //get humidity value from api
          var humidityNumFive = data.daily[5].humidity + ' %';
          dayFiveHumidity.textContent = humidityNumFive;
        
  
          //get UV Index value from api 
          var UVIndexNumFive = data.daily[5].uvi;
          dayFiveUVIndex.textContent = UVIndexNumFive;
         
          // DONT KNOW IF UV VALUES PART IS CORRECT. NUMS HAVE SPACES BETWEEN 5 and 6 etc.
          //if statements to set text background to color based on UV num.
          if(UVIndexNumFive <= 2) {
            dayFiveUVIndex.classList.add("lowUV")
  
          }
          else if(3 <= UVIndexNumFive < 5) {
            dayFiveUVIndex.classList.add("moderateUV")
  
          }
          else if(6 <= UVIndexNumFive < 7) {
            dayFiveUVIndex.classList.add("highUV")
  
          }
          else if(8 <= UVIndexNumFive < 10) {
            dayFiveUVIndex.classList.add("veryHighUV")
  
          }

    })
    .catch(err => console.error(err));

}

var cityStorage = document.querySelector('.localStorage');

//function to render buttons
function getcityButton(){
  //define element to append ul
  var cityInfo = JSON.parse(localStorage.getItem('cities'));
  //create list el.
  console.log(cityInfo);

  var ul = document.createElement("ul");
  if(cityInfo === null){
    console.log("hi");
  }
  else{
    for(var i=0; i <=cityInfo.length; i++) {
      //iterate through city data
      console.log(cityInfo[i]);
      var li = document.createElement("li");
      //create button and add to inner html of li
      li.innerHTML = "<button type='button'>" + cityInfo[i] + "</button>";
      ul.append(li);
    }
  }
  cityStorage.append(ul);
// var citybtn = document.createElement("button");

}

//city api link
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=6b089db5e12bcc8e35e3e9236791aef9


var apiKey = "6b089db5e12bcc8e35e3e9236791aef9";
cities =  JSON.parse(localStorage.getItem('cities')) || [];
//reference
function getCityName(cityName) {
    var cityCall = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName +  '&appid=6b089db5e12bcc8e35e3e9236791aef9'
  
    fetch(cityCall)
    // .then(response => console.log(response))
      .then(response => response.json())
    //   .then(response => console.log(response))
      .then(function (data) {
        console.log(data)
        //cityName 
        var cityVal = data.name + '';
        cityNameValue.textContent = cityVal;
        //where I get city for local storage

        cities.push(cityVal)
        localStorage.setItem('cities', JSON.stringify(cities))

        var date = " " + new Date().toLocaleDateString()
        cityNameValue.textContent += date;

        //taken values from json
        var lat = data.coord.lat;
        var long = data.coord.lon;
        getLandLLocation(lat, long)
      })
    //.then(response => renderCityInfo(response)
      .catch(err => console.error(err));
  
  }


  getcityButton();

  cityStorage.addEventListener("click", function (event){
    var newCity = event.target.textContent
    console.log(event.target.textContent);
    getCityName(newCity);
  }
  )