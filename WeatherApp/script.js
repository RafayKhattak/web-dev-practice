/**
 * Weather App
 */

// API_KEY for OpenWeatherMap API
const API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from OpenWeatherMap API
 * @param {string} city - The city for which to retrieve weather data
 * @returns {Promise} - A promise containing the weather data response
 */
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;
  
  // Fetch the weather data and return the response as JSON
  return fetch(FULL_URL)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      throw new Error("Something went wrong");
    });
}

/**
 * Retrieve city input and get the weather data
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
    .then((weatherData) => {
      showWeatherData(weatherData);
    })
    .catch((error) => {
      console.error(error);
    });
}

/**
 * Show the weather data in HTML
 * @param {object} weatherData - The weather data to display
 */
const showWeatherData = (weatherData) => {
  const fahrenheit_main = (weatherData.main.temp * 9/5) + 32;
  const fahrenheit_min = (weatherData.main.temp_min * 9/5) + 32;
  const fahrenheit_max = (weatherData.main.temp_max * 9/5) + 32;

  // Update the HTML elements with the weather data
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = `${weatherData.main.temp.toFixed(1)}°C / ${fahrenheit_main.toFixed(1)}°F`;
  document.getElementById("min-temp").innerText = `${weatherData.main.temp_min.toFixed(1)}°C / ${fahrenheit_min.toFixed(1)}°F`;
  document.getElementById("max-temp").innerText = `${weatherData.main.temp_max.toFixed(1)}°C / ${fahrenheit_max.toFixed(1)}°F`;
}
