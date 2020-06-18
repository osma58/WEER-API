


// element selecteren
const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const infoElement = document.querySelector('.temperature-description p');
const locatieElement = document.querySelector('.locatie');
const notificatieElement = document.querySelector('.notificatie');

// app data
const weer = {};

weer.temp = {
    unit : "celcius"
}

// app const and vars 
const KELVIN = 273;
// api key
const key = "82005d27a116c2880c8f0fcb866998a0";

//check if browser supports location
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPostion, showError);
}else {
    notificatieElement.style.display = "block";
    notificatieElement.innerHTML= "<p>Broweser doesn't Support Geolocation</p>";
}

//set users position 
function setPostion(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.latitude;

    getWeather(latitude, longitude);
}

//show error als er een isue is 
function showError(error) {
    notificatieElement.style.display = "block";
    notificatieElement.innerHTML= `<p>${error.message} </p>`;
}

//get weather from api provider
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
    .then(function(response) {
        let data = response.json();
        return data;
    })
    .then(function(data){
        weer.temp.value = Math.floor(data.main.temp - KELVIN);
        weer.description = data.weather[0].description;
        weer.iconId = data.weather[0].icon;
        weer.city = data.name;
        weer.country = data.sys.country;

    })
    .then(function(){
        displayWeather();
    });

    //display weer
    function displayWeather(){
        iconElement.innerHTML = `<img src="icons/${weer.iconId}.png"/>`;
        tempElement.innerHTML = `${weer.temp.value}°<span>C</span>`;
        infoElement.innerHTML = weer.description;
        locatieElement.innerHTML = `${weer.city}, ${weer.country}`;
    }

    // c naar F
    function celciusToFahrenheit(temperature) {
        return (temperature * 9/5) + 32;
    }

    //asl je klikt op de temp
    tempElement.addEventListener("click", function(){
        if(weer.temp.value === undefined) return;

         if(weer.temp.unit == "celcius"){
             let fahrenheit = celciusToFahrenheit(weer.temp.value);
             fahrenheit = Math.floor(fahrenheit);

             tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
             weer.temp.unit = "fahrenheit";
         }else {
            tempElement.innerHTML = `${weer.temp.value}°<span>C</span>`;
            weer.temp.unit = "celcius"
         }
    })
}
