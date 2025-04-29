async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "fc754022cb224278bbd94416252904"; // Your WeatherAPI key
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found or API error");
    }

    const data = await response.json();
    const weatherInfo = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <img src="https:${data.current.condition.icon}" alt="Weather Icon" />
      <p><strong>${data.current.condition.text}</strong></p>
      <p>Temperature: ${data.current.temp_c} °C</p>
      <p>Humidity: ${data.current.humidity}%</p>
      <p>Wind: ${data.current.wind_kph} kph</p>
    `;
    document.getElementById("weather").innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById(
      "weather"
    ).innerHTML = `<p style="color: #ffcccc;">${error.message}</p>`;
  }
}
