import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [isha, setIsha] = useState('');

  const getData = async () => {
    const response = await fetch('http://localhost:5000/').then((res) => res.json());
    console.log(response)
    setIsha(response.data);
  }
  useEffect(() => {
    getData();
  }, [])

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
        <h1>{isha}</h1>
      </header>
    </div>
  );
}

export default App;
