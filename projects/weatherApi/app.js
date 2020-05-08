// get geolocation
const urlGetGeoIP = "http://api.sypexgeo.net/";
let degreeObj;

// todo get set them form localStorage

// colection of cities for auto complete in searching field input
// const cityNamesObject = sendGetRequestInJSON(url)

// form elements
const form = document.forms["search-form"];
const searchInput = form.elements["town"];

// listener of submit of searching form
form.addEventListener("submit", (e) => {
  const city = searchInput.value;
  getWeatherParams(city);
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
  // init materialize
  M.AutoInit();

  // get geolocaton
  getGeolocation();

  // top carousel
  var topCarousel = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(topCarousel, {
    fullWidth: true,
    // dist: 0,
    // numVisible: 3,
    noWrap: true,
  });

  // auto coplete of searching input field
  sendGetRequestInJSON("json/uaTowns.json").then((data) => {
    const autoComplete = document.querySelectorAll(".autocomplete");
    M.Autocomplete.init(autoComplete, {
      limit: 5,
      data,
    });
  });
});

// get ip and show the first weather
function getGeolocation() {
  navigator.geolocation.getCurrentPosition(
    (location) => {
      const city = {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      };
      getWeatherParams(city);
    },
    () => {
      sendGetRequestInJSON(urlGetGeoIP).then((geoObj) => {
        const { city } = geoObj;
        getWeatherParams(city);
      });
    }
  );
}

// send request function and get objcet from json response
function sendGetRequestInJSON(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

function getFullURL(city) {
  const apiKey = "24d53a97499b69ca0f955037bf29e18b";
  const url = "https://api.openweathermap.org/data/2.5/weather?";
  const langluage = `&lang=ua`;
  let fullURL;
  if (typeof city === "string")
    fullURL = `${url}q=${city}&appid=${apiKey}${langluage}`;
  else {
    const { lat, lon } = city;
    fullURL = `${url}lat=${lat}&lon=${lon}&appid=${apiKey}${langluage}`;
  }
  return fullURL;
}

function getWeatherParams(city) {
  const fullURL = getFullURL(city);
  sendGetRequestInJSON(fullURL).then((watherParamsObject) => {
    randerShowingWeather(watherParamsObject);
  });
}

function randerShowingWeather(watherParamsObject) {
  generateWeatherTempateMainPart(watherParamsObject);
  generateWeatherTempateInfo(watherParamsObject);
  setMainBackground(watherParamsObject);
}

function generateWeatherTempateMainPart(watherParamsObject) {
  // get DOM elements
  const DOMIcon = document.querySelector(".card-image.wather-icon img");
  const DOMTown = document.querySelector(".town-title");
  const DOMDescription = document.querySelector(".weather-description");
  const DOMDegree = document.querySelector(".showing-degree");

  // get response params
  const {
    sys: { country },
    name: town,
  } = watherParamsObject;
  const icon = watherParamsObject.weather[0].icon;
  const description = watherParamsObject.weather[0].description;
  degreeObj = getTemperature(watherParamsObject);

  //set params
  DOMIcon.src = `img/dark/${icon}.png`;
  DOMTown.innerHTML = `${town} (${country})`;
  DOMDescription.innerHTML = description;
  DOMDegree.classList.add("celsius");
  DOMDegree.innerHTML = `${degreeObj.celsius}<sup>o</sup><span> C</span>`;
  DOMDegree.addEventListener("click", onDegreehandler);
}
// generate Weather Tempate for Info block
function generateWeatherTempateInfo(watherParamsObject) {
  //get DOM Elements
  const DOMDate = document.querySelector(".date");
  const DOMSunrise = document.querySelector(".sunrise");
  const DOMSunset = document.querySelector(".sunset");
  const DOMWind = document.querySelector(".wind");
  const DOMHumidity = document.querySelector(".humidity");
  const DOMPressure = document.querySelector(".pressure");

  // get weather params
  const humidity = watherParamsObject.main.humidity;
  const pressure = watherParamsObject.main.pressure;
  const date = getDateParams(watherParamsObject);
  const wind = getWindParams(watherParamsObject);

  // set weather params
  DOMDate.innerHTML = `<b>Дата/час: </b><span>${date.dateTime}</span>`;
  DOMSunrise.innerHTML = `<b>Схід сонця: </b><span>${date.sunrise}</span>`;
  DOMSunset.innerHTML = `<b>Захід сонця: </b><span>${date.sunset}</span>`;
  DOMWind.innerHTML = `<b>Вітер </b><span>${wind.deg} ${wind.speed} км/год</span>`;
  DOMHumidity.innerHTML = `<b>Вологість: </b><span>${humidity}%</span>`;
  DOMPressure.innerHTML = `<b>Тиск: </b><span>${pressure} гПа</span>`;
}

function onDegreehandler(e) {
  if (this.className.includes("celsius")) {
    this.classList.replace("celsius", "fahrenheit");
    this.innerHTML = `${degreeObj.fahrenheit}<sup>o</sup><span> F</span>`;
  } else if (this.className.includes("fahrenheit")) {
    this.classList.replace("fahrenheit", "celsius");
    this.innerHTML = `${degreeObj.celsius}<sup>o</sup><span> C</span>`;
  }
}

function getTemperature(watherParamsObject) {
  const {
    main: { temp },
  } = watherParamsObject;
  const celsius = (temp - 273.15).toFixed(0);
  return {
    celsius,
    fahrenheit: ((celsius * 9) / 5 + 32).toFixed(0),
  };
}

function getDateParams(watherParamsObject) {
  let {
    dt: dateTime,
    sys: { sunrise, sunset },
  } = watherParamsObject;
  dateTime = new Date(dateTime * 1000);
  sunrise = new Date(sunrise * 1000);
  sunset = new Date(sunset * 1000);
  return {
    time: `${fixDate(dateTime.getHours())}:${fixDate(dateTime.getMinutes())}`,
    dateTime: `${fixDate(dateTime.getDate())}/${fixDate(
      dateTime.getMonth() + 1
    )} ${fixDate(dateTime.getHours())}:${fixDate(
      dateTime.getMinutes()
    )} UTC+03:00`,
    sunrise: `${fixDate(sunrise.getHours())}:${fixDate(sunrise.getMinutes())}`,
    sunset: `${fixDate(sunset.getHours())}:${fixDate(sunset.getMinutes())}`,
  };
}

// fix date and time format to add 0 when num less then 10
function fixDate(num) {
  if (num >= 0 && num < 10) return `0${num}`;
  return num;
}

function getWindParams(watherParamsObject) {
  let {
    wind: { deg, speed },
  } = watherParamsObject;
  speed = (speed * 3.6).toFixed(0);
  if (deg >= 338 || deg <= 22) deg = "Пн";
  else if (deg >= 23 && deg <= 67) deg = "ПнСх";
  else if (deg >= 67 && deg <= 112) deg = "Сх";
  else if (deg >= 112 && deg <= 157) deg = "ПдСх";
  else if (deg >= 157 && deg <= 202) deg = "Пд";
  else if (deg >= 202 && deg <= 247) deg = "ПдЗх";
  else if (deg >= 247 && deg <= 292) deg = "Зх";
  else if (deg >= 292 && deg <= 337) deg = "ПнЗх";
  return {
    speed,
    deg,
  };
}

function setMainBackground(watherParamsObject) {
  const WeatherIcon = watherParamsObject.weather[0].icon;
  const html = document.documentElement;
  html.style.setProperty("--mainBG", `url(img/bg/${WeatherIcon}.jpg)`);
}
