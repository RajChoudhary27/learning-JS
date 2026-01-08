const API_KEY = "3115eadfe8d8aeca33f9e1902160cfef";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");
const result = document.getElementById("weatherResult");

async function checkWeather(city) {
    if (!city) {
        result.innerHTML = "❌ Please enter city name";
        return;
    }

    const response = await fetch(
        BASE_URL + city + "&appid=" + API_KEY
    );

    const data = await response.json();

    if (data.cod !== 200) {
        result.innerHTML = "❌ City not found";
        return;
    }

    displayWeather(data);
}

function displayWeather(data) {
    const cityName = data.name;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const description = data.weather[0].description;
    

    result.innerHTML = `
        <h2>${cityName}</h2>
        
        <p>${description}</p>
        <p>🌡 Temp: ${temp} °C</p>
        <p>💧 Humidity: ${humidity}%</p>
        <p>💨 Wind: ${wind} m/s</p>
    `;
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
