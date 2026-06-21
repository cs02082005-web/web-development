const weatherApiKey = "85a3a232a785b957187bed3c8dde740e";

async function getWeather() {
  let city = document.getElementById("city").value;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    document.getElementById("weatherResult").innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡 Temp: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching weather!";
  }
}
const movieApiKey = "edb892ad";

async function getMovie() {
  let movie = document.getElementById("movie").value;

  let url = `https://www.omdbapi.com/?apikey=${movieApiKey}&t=${movie}`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (data.Response === "False") {
      document.getElementById("movieResult").innerHTML =
        `<p>${data.Error}</p>`;
      return;
    }

    document.getElementById("movieResult").innerHTML = `
      <h3>${data.Title}</h3>
      <p>🎞 Year: ${data.Year}</p>
      <img src="${data.Poster}" width="150"/>
      <p>⭐ IMDB: ${data.imdbRating}</p>
    `;
  } catch (error) {
    document.getElementById("movieResult").innerHTML =
      "Error fetching movie!";
    console.log(error);
  }
}