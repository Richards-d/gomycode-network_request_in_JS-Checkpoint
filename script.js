// OpenWeatherMap API key
const API_KEY = 'e25fe246c0f6f1beed8d2e9cb8e65f2b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
async function fetchWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

// Function to update weather details in the HTML
function displayWeather(data) {
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const weatherDetails = document.getElementById('weatherDetails');

    location.textContent = `Location: ${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Description: ${data.weather[0].description}`;
    weatherDetails.classList.remove('hidden');
}

// Event listener for the button
document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name');
    }
});
