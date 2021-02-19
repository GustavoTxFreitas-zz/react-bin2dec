import { useState } from 'react';

import './App.css';
import Text from './components/text';
import Input from './components/input';
import Display from './components/display';
import AppContainer from './components/appContainer';
import GlassContainer from './components/glassContainer';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  return (
    <AppContainer>
      <GlassContainer>
        <Text className='header'>binary to decimal<br></br>converter</Text>

        <Display bin={inputValue} dec={displayValue}></Display>

        <Input
          id='binary-input'
          label='Enter a binary number'
          placeholder='ex.: 11111100101'
          onchange={e => {
            setInputValue(e.target.value);
            setDisplayValue(conversion(e.target.value));
          }} />

        <Text className='footer'>Powered by&ensp;<span className="bull">&bull;</span>&ensp;<a href='https://github.com/GustavoTxFreitas'>Gustavo Teixeira</a></Text>
      </GlassContainer>
    </AppContainer>

  );
}

const conversion = (value) => {
  let counter = 0, bin = value.trim();

  for (let digits of bin) {
    if (digits !== '0' && digits !== '1')
      return NaN;
    else
      counter = counter * 2 + parseInt(digits);
  }

  return counter.toString();
};

export default App;
