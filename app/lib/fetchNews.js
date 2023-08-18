export default async function fetchNews() {
  const apiName = "https://newsapi.org/v2/";
  const endpoint = "top-headlines";
  const country = "country=us";
  const apiKey = "apiKey=fb4fc729fd8a49e186bd6af5db74cbfd";

  const url = apiName + endpoint + "?" + country + "&" + apiKey;

  var req = new Request(url);
  var apiData = "";
  await fetch(req)
    .then((response) => response.json())
    .then((data) => (apiData = data));

  return apiData;
}
