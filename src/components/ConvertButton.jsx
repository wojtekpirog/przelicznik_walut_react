import React from "react";

function ConvertButton(props) {
  const { defineSelect } = props;
  return (
    <button id="button" className="pointer" onClick={defineSelect}>Zamień na PLN</button>    
  );
}

export default ConvertButton;
