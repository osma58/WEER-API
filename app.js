// Tutorial by http://youtube.com/CodeExplained


// element selecteren
const iconElement = document.querySelector('.weer-icon');
const tempElement = document.querySelector('.temp-waarde p');
const infoElement = document.querySelector('.temp-info p');
const locatielement = document.querySelector('.locatie');
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
    let api = `http://api.openweathermap.org/data/2.5/weather?
    lat=${latitude}&lon=${longitude}&appid=${key}`;

    console.log(api);
}
