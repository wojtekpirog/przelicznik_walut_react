import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { fetchCurrencies } from "./services/fetchCurrencies";
import SelectCurrency from "./components/LeftBox/selectCurrency";
import InputCurrency from "./components/LeftBox/Input";
import BtnBox from "./components/btnBox";
import ValueInPLN from "./components/RightBox/amountInfo";
import Output from "./components/RightBox/resultOutput";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  console.log(currencyOptions);

  useEffect(() => {

    fetchCurrencies.then((JSdataReady) => {

      console.log(JSdataReady);

      for (currency of JSdataReady[0].rates) {
        setCurrencyOptions((currencyOptions) => [...currencyOptions, currency.code]);
        console.log(currencyOptions)                            
      }

    });

  }, []);

  return (
    <React.Fragment>
      <div className="wrapper">
        <h1>PRZELICZNIK WALUT</h1>
        <div className="box">
          <div className="left-box">
            <SelectCurrency />
            <InputCurrency />            
          </div>
          <div className="right-box">
            <ValueInPLN />
            <Output />
          </div>
        </div>
        <BtnBox />
      </div>
    </React.Fragment>
  );
}

export default App;
