import { WEATHER_API_KEY } from "../dd";

const API_KEY = WEATHER_API_KEY;
const weather = document.querySelector("#weather span:last-child");
const city = document.querySelector("#weather span:first-child");

const onGeoOkay = (position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name, data.weather[0].main);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;
    });
};
const onGeoError = () => {
  alert("니 위치 몰라!");
};

navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);
