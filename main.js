const notifivatieElement = document.querySelector('.notification');
const iconElement = document.querySelector('weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const infoElement = document.querySelector('.temperature-description p');
const locatieElement = document.querySelector('.locatie p');

const weer = {
    temp: {
        waarde : 18,
        unit: "celsius"
    },

    description : "few clouds",
    iconId: "01d",
    city: "Amsterdam",
    country: "NL"
};