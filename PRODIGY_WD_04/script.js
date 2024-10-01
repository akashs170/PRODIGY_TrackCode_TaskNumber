// Select elements
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const locationDisplay = document.getElementById("location");
const temperatureDisplay = document.getElementById("temperature");
const descriptionDisplay = document.getElementById("description");
const humidityDisplay = document.getElementById("humidity");

// OpenWeatherMap API key (replace 'YOUR_API_KEY' with your actual API key)
const apiKey = "665ac0852a17222310af8e6a78bcf136";

// Event listener for the search button
searchBtn.addEventListener("click", function () {
  const city = cityInput.value;
  if (city) {
    fetchWeatherData(city);
  }
});

// Function to fetch weather data based on city
function fetchWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const location = `${data.name}, ${data.sys.country}`;
        const temperature = `${data.main.temp} °C`;
        const description = data.weather[0].description;
        const humidity = `Humidity: ${data.main.humidity}%`;

        // Display the fetched weather data
        locationDisplay.textContent = location;
        temperatureDisplay.textContent = `Temperature: ${temperature}`;
        descriptionDisplay.textContent = `Weather: ${description}`;
        humidityDisplay.textContent = humidity;
      } else {
        alert("City not found. Please enter a valid city.");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again later.");
    });
}

// Optionally, you can also fetch the weather based on the user's geolocation if available
