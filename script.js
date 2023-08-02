const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const pressure = document.querySelector("#pressure");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const speed = document.querySelector("#speed");
const deg = document.querySelector("#deg");
const imgWeather = document.querySelector("#img");
const inputCity = document.querySelector(".input-city");
const searchWeather = document.querySelector(".submit");
const app = document.querySelector(".app-weather");
const formSearch = document.querySelector(".form");

searchWeather.addEventListener("click", () => {
  const weatherCity = inputCity.value.toUpperCase();

  app.style.display = "grid";
  formSearch.style.display = "none";
  const getWeatherInfo = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

    request.onload = () => {
      if (request.status === 200) {
        resolve(JSON.parse(request.responseText));
      } else {
        reject("Not found City");
      }
    };

    request.open("GET", url);
    request.send();
  }).then((data) => {
    city.innerText = data.name;
    temp.innerText = `${Math.round(data.main.temp)}°C`;
    pressure.innerText = `${data.main.pressure} hPa`;
    description.innerText = data.weather[0].description;
    humidity.innerText = `${data.main.humidity}%`;
    speed.innerText = `${data.wind.speed} km/h`;
    deg.innerText = `${data.wind.deg}°C`;
    imgWeather.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    console.log(data);
  });
  getWeatherInfo.catch((err) => {
    app.style.display = "none";
    inputCity.value = "Not Found This City!";
    formSearch.style.display = "flex";
    reject("Something went wrong", err);
  });
});
