import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { fetchCurrencies } from "./services/fetchCurrencies";
import SelectCurrency from "./components/LeftBox/selectCurrency";
import InputCurrency from "./components/LeftBox/Input";
import ConvertButton from "./components/ConvertButton";
import ValueInPLN from "./components/RightBox/amountInfo";
import Output from "./components/RightBox/resultOutput";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [selectValue, setSelectValue] = useState("EUR");
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(0);
  const numberFromInput = inputValue;

  useEffect(() => {
    fetchCurrencies.then((JSdataReady) => {
      setCurrencyOptions(JSdataReady);
    });
  }, []);

  function convertToPLN() {
    if (numberFromInput > 0) {
      const mid = currencyOptions[0].rates.find(
        (element) => element.code === selectValue
      ).mid;
      const calculatedAmount = (numberFromInput * mid).toFixed(2);
      setResult(calculatedAmount);
    } else {
      alert("Podaj liczbę większą od zera");
    }
  }

  function handleSelectChange(e) {
    setSelectValue(e.target.value);
  }

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        <h1>PRZELICZNIK WALUT</h1>
        <div className="box">
          <div className="left-box">
            <SelectCurrency
              selectValue={selectValue}
              onSelectChange={handleSelectChange}
            />
            <InputCurrency inputValue={handleInputValue} />
          </div>
          <div className="right-box">
            <ValueInPLN />
            <Output result={result} />
          </div>
        </div>
        <div className="btn-box">
          <ConvertButton convert={convertToPLN} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
