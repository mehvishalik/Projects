let input = document.querySelector("input");
let apiKey = "72cbbf8ecdfd5450738b567a6b84608f";
let cityUi = document.getElementById("cityinner");
let searchBtn = document.querySelector("button");
let city = input.value;
let cityName = document.getElementById("cityinner");
let cityWeather = document.getElementById("innerdegree");
let humidity = document.getElementById("endpartinner1");
let wind = document.getElementById("endpartinner2");
let weatherIcon = document.getElementById("outerimg");
searchBtn.addEventListener("click", async () => {
  try {
    let city = input.value;
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    if (city === "") {
      alert("Please enter a city name");
      return;
    }
    let response = await axios.get(weatherUrl);
    let data = response.data;
    console.log(data);
    let condition = data.weather[0].main;
    switch (condition) {
      case "clear":
        weatherIcon.src = "./";
        break;
    }
    cityName.innerText = data.name;
    cityWeather.innerText = `${Math.floor(data.main.temp)}°C
`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    wind.innerText = `Wind: ${data.wind.speed} m/s`;
    input.value = "";
  } catch (error) {
    console.log(error);
  }
});
