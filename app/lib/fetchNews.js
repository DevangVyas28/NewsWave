export default async function fetchNews() {
  const apiName = "https://newsapi.org/v2/";
  const endpoint = "top-headlines";
  const country = "country=us";
  const apiKey = "apiKey=" + process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const url = apiName + endpoint + "?" + country + "&" + apiKey;

  var req = new Request(url);
  var apiData = "";
  await fetch(req)
    .then((response) => response.json())
    .then((data) => (apiData = data));
  return apiData;
}
