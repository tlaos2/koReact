import logo from './logo.svg';
import ReactDOM from 'react-dom';
// import {reactdom} from "ReactDOM";

function App() {
  const element = <h1 className="greeting"> Hellow world1231231</h1>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {element}
        {tick()}
      </header>
    </div>
  );
}

function tick() {
  const element = (
    <div>
      <h1>Hellow World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('watch'));
}

setInterval(tick, 1000);

export default App;
