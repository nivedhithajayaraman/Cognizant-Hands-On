import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import SyntheticClick from './components/SyntheticClick';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>React Event Examples</h1>
      <Counter />
      <Welcome />
      <SyntheticClick />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
