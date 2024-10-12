const api =
  "http://api.weatherapi.com/v1/current.json?key=648052733b4b41ec86e15742241210&q=";
const search = document.getElementById("search");
const input = document.getElementById("input");
const name = document.getElementById("name");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const hi_low = document.getElementById("hi-low");
async function see_weather(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
async function show_weather(url) {
  const data = await see_weather(url);
  name.innerText = data.location.name;
  temp.innerText = data.current.temp_c;
  weather.innerText = data.current.condition.text;
  hi_low.innerText = `${data.current.temp_c}°C / ${data.current.temp_f}°F`;
}
search.addEventListener("click", () => {
  const new_api = `${api}${input.value}`;
  show_weather(new_api);
});
