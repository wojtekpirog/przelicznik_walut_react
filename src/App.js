import React from "react";
import { useState } from "react";
import "./App.css";
import { fetchCurrencies } from "./services/fetchCurrencies";
import SelectCurrency from "./components/SelectCurrency";
import InputCurrency from "./components/Input";
import ConvertButton from "./components/ConvertButton";
import ValueInPLN from "./components/ValuePln";
import Output from "./components/ResultOutput";

function App() {
  const [selectValue, setSelectValue] = useState("EUR");
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(0);

  function convertToPLN() {
    if (inputValue > 0) {
      fetchCurrencies.then((JSdataReady) => {
        const mid = JSdataReady[0].rates.find(
          (element) => element.code === selectValue
        ).mid;
        const calculatedAmount = (inputValue * mid).toFixed(2);
        setResult(calculatedAmount);
      });
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
