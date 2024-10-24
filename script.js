const api =
  "https://api.weatherapi.com/v1/current.json?key=648052733b4b41ec86e15742241210&q=";
const search = document.getElementById("search");
const input = document.getElementById("input");
const city = document.getElementById("name");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const image = document.getElementById("image");
async function see_weather(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.current.temp_c);
  return data;
}

async function show_weather(url) {
  const data = await see_weather(url);
  console.log(data);
  city.innerText = data.location.name;
  temp.innerText = data.current.temp_c + "°C";
  console.log(data.current.wind_kph);
  wind.innerText = data.current.wind_kph + "km/h";
  humidity.innerText = data.current.humidity + "%";

  if (data.current.temp_c < 1) {
    image.src = "./images/snow.png";
  } else if (data.current.temp_c > 0 && data.current.temp_c < 10) {
    image.src = "./images/rain.png";
  } else if (data.current.temp_c > 10 && data.current.temp_c < 20) {
    image.src = "./images/clouds.png";
  } else {
    image.src = "./images/clear.png";
  }
}
search.addEventListener("click", () => {
  const new_api = `${api}${input.value}`;
  show_weather(new_api);
});
addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const new_api = `${api}${input.value}`;
    show_weather(new_api);
  }
});
