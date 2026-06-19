// Weather App

async function getWeather(){

    let city = document.getElementById("city").value;

    let apiKey = "85a3a232a785b957187bed3c8dde740e";

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        let response = await fetch(url);
        let data = await response.json();

        document.getElementById("weatherResult").innerHTML =
        `
        <h3>${data.name}</h3>
        <p>Temperature : ${data.main.temp} °C</p>
        <p>Humidity : ${data.main.humidity}%</p>
        <p>${data.weather[0].description}</p>
        `;

    }
    catch(error){
        console.log(error);
    }
}


// Movie Search App

async function getMovie(){

    let movie = document.getElementById("movie").value;

    let apiKey = "edb892ad";

    let url =
    `https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;

    try{

        let response = await fetch(url);
        let data = await response.json();

        document.getElementById("movieResult").innerHTML =
        `
        <h3>${data.Title}</h3>
        <img src="${data.Poster}" width="200">
        <p>Year : ${data.Year}</p>
        <p>Type : ${data.Type}</p>
        `;

    }
    catch(error){
        console.log(error);
    }
}