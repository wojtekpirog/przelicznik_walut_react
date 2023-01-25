function SelectCurrency({onSelectChange, selectValue}) {
  return (
    <select name="currency" id="list" className="currency pointer" value={selectValue} onChange={onSelectChange}>
      <option value="EUR" id="eur">Euro</option>             
      <option value="USD" id="usd">Dolar Amerykański</option>      
      <option value="CHF" id="chf">Frank Szwajcarski</option>              
    </select>   
  )
}

export default SelectCurrency;