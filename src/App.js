import logo from './logo.svg';
import './App.css';
import Projects from './axiosApi'; // Adjust the path as necessary

function App() {
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
      </header>
      <div>
        <h1>My Projects</h1>
        <Projects />
     </div>
     <div>
      <button className="btn btn-primary">My Bootstrap Button</button>
    </div>
    </div>
  );
}

export default App;
