const higherLowerText = document.querySelector(".higher-lower-text");
const weatherAPIKey = "";
const latitude = "51.74";
const longitude = "0.47";

setTimeout(function () {
  higherLowerText.style.letterSpacing = "4px";
  higherLowerText.style.fontSize = "4rem";
}, 100);

// console.log(weatherAPIKey);

const getCurrentWeather = async function () {
  let londonUrl =
    "https://api.openweathermap.org/data/3.0/onecall?lat=51.51&lon=0.13&exclude=current,minutely,hourly,alerts&appid=42d397e5a775ae63f3b94f0e308f7fc3&units=metric";

  let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=42d397e5a775ae63f3b94f0e308f7fc3&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  // Access the "daily" array
  const dailyForecasts = data.daily;

  // Access the first forecast (day 0)
  const firstForecast = dailyForecasts[0];

  // Extract the "feels_like" temperature for the first forecast
  const feelsLikeTemp = firstForecast.feels_like.day;

  console.log("Feels like temperature:", feelsLikeTemp);
};

getCurrentWeather();
