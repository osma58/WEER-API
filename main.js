const notifivatieElement = document.querySelector('.notificatie');
const iconElement = document.querySelector('.weer-icon');
const tempElement = document.querySelector('.temp-waarde p');
const infoElement = document.querySelector('.temp-info p');
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