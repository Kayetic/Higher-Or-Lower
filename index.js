const higherLowerText = document.querySelector(".higher-lower-text");
const weatherAPIKey = "";
const londonLatitute = "51.5074";
const londonLongitude = "0.1278";

setTimeout(function () {
  higherLowerText.style.letterSpacing = "4px";
  higherLowerText.style.fontSize = "4rem";
}, 100);

console.log(weatherAPIKey);

const getCurrentWeather = async function () {
  let url = `https://api.openweathermap.org/data/3.0/onecall?lat={${londonLatitute}}&lon={${londonLongitude}}&exclude={}&appid={${weatherAPIKey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getCurrentWeather();
