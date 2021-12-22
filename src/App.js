import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website is&nbsp;
        <a
          className="App-link"
          href="https://github.com/andresgalaviz/andresgalaviz.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
        in-progress
        </a>
        .
        <br/>
        - Andres
        </p>
      </header>
    </div>
  );
}

export default App;
