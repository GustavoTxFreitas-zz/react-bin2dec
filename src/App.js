import './App.css';
import Input from './components/input';
import Display from './components/display';

function App() {
  return (
    <div id="container">

      <header>
        <h1>Bin2Dec</h1>
      </header>

      <section id="main">
        <Display value="- - -" />
        <Input placeholder="ex.: 11111100101" />
      </section>

      <footer>
        <h3>Todos os direitos reservados <a href="https://github.com/GustavoTxFreitas">Gustavo Teixeira</a>.</h3>
      </footer>
    </div>

  );
}

export default App;
