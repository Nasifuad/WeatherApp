const api =
  "http://api.weatherapi.com/v1/current.json?key=648052733b4b41ec86e15742241210&q=Dhaka";

async function see_weather(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  // return data;
}
see_weather(api);
