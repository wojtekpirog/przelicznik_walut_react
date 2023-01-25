const url = "https://api.nbp.pl/api/exchangerates/tables/a/today/";

const fetchCurrencies = fetch(url)
  .then((JSONresponse) => JSONresponse.json())
  .catch((error) => {
    console.log(`Error message: ${error.message}`);
    alert("Wystąpił błąd podczas pobierania danych.");
  });

export { fetchCurrencies };
