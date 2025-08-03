import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const rate = 0.011;
    const result = parseFloat(rupees) * rate;
    if (!isNaN(result)) {
      setEuro(result.toFixed(2));
    } else {
      setEuro('');
    }
  };

  return (
    <div>
      <h3>Currency Converter (INR ➝ EURO)</h3>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter INR"
      />
      <button onClick={handleSubmit}>Convert</button>
      <p>Euro: €{euro}</p>
    </div>
  );
}

export default CurrencyConvertor;
