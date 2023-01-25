function InputCurrency({inputValue}) {
  return (
    <input type="number" id="input" className="amount-box--foreign" onInput={inputValue} />
  )
}

export default InputCurrency;