function ConvertButton({ convert }) {
  return (
    <button id="button" className="pointer" onClick={convert}>
      Zamień na PLN
    </button>
  );
}

export default ConvertButton;
