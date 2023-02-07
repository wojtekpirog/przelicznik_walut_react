const url = "https://api.nbp.pl/api/exchangerates/tables/a/";

const fetchCurrencies = fetch(url)
  .then((JSONresponse) => JSONresponse.json())
  .catch((error) => {
    console.error(`Error message: ${error.message}`);
    alert("Wystąpił błąd podczas pobierania danych.");
  });

export { fetchCurrencies };
