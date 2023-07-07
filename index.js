const higherLowerText = document.querySelector(".higher-lower-text");
const weatherAPIKey = "";
const londonLatitute = "51.51";
const londonLongitude = "0.13";

setTimeout(function () {
  higherLowerText.style.letterSpacing = "4px";
  higherLowerText.style.fontSize = "4rem";
}, 100);

console.log(weatherAPIKey);

const getCurrentWeather = async function () {
  let url =
    "https://api.openweathermap.org/data/3.0/onecall?lat=51.51&lon=0.13&exclude=current,minutely,hourly,alerts&appid=42d397e5a775ae63f3b94f0e308f7fc3";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  // getting just the hourly forecast of temperatures into an array
  //   const hourlyForecast = data.daily[0].temp;
  // get the temperatures at 11am, 12am, 1pm and 2pm then take the average
  const averageTemp =
    (hourlyForecast.morn +
      hourlyForecast.day +
      hourlyForecast.eve +
      hourlyForecast.night) /
    4;
  //   console.log(hourlyForecast);
};

getCurrentWeather();
