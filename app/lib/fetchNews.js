export default async function fetchNews() {
  const apiUrl = "https://newsdata.io/api/1/news?apikey=";
  // const apiName = "https://newsapi.org/v2/";
  const country = "country=us";
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const url = apiUrl + apiKey + "&" + country + "&size=10";

  var req = new Request(url);
  var apiData = "";
  await fetch(req)
    .then((response) => response.json())
    .then((data) => (apiData = data));
  console.log(apiData.results);
  return apiData;
}
