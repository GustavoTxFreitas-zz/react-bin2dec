import { useState } from "react";

import './App.css';
import Input from './components/input';
import Display from './components/display';

function App() {
  const [inputValue, setInputValue] = useState(0);

  // const conversion = (value) => {
  //   let counter = 0, bin = value.trim();

  //   for (let digits of bin) {
  //     if (digits !== '0' && digits !== '1')
  //       return NaN;
  //     else
  //       counter = counter * 2 + parseInt(digits);
  //   }

  //   return counter;
  // };

  const conversion = (value) => {
    let counter = 0, bin = value.trim();

    for (let digits of bin) {
      if (digits !== '0' && digits !== '1')
        return 'non-binary';
      else
        counter = counter * 2 + parseInt(digits);
    }

    return counter.toString();
  };

  return (
    <div id="container">

      <header>
        <h1>Bin2Dec</h1>
      </header>

      <section id="main">
        <Display>{inputValue}</Display>
        <Input
          placeholder="ex.: 11111100101"
          onchange={e => setInputValue(conversion(e.target.value))} />
      </section>

      <footer>
        <h2>Todos os direitos reservados <a href="https://github.com/GustavoTxFreitas">Gustavo Teixeira</a>.</h2>
      </footer>
    </div>

  );
}

export default App;
