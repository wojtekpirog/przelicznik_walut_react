function InputCurrency({ inputValue }) {
  return (
    <input
      type="number"
      id="input"
      required="required"
      className="amount-box--foreign"
      onInput={inputValue}
    />
  );
}

export default InputCurrency;
