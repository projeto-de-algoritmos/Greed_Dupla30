import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { knapSackRecursive, unboundedKnapsack, knapSack } from './algorithms/knapsack'

const mock = [
    {
        "name": "Mitchell Ernser",
        "value": 97.97,
        "weight": 31
    },
    {
        "name": "Michele Muller",
        "value": 78.21,
        "weight": 67
    },
    {
        "name": "Cynthia Price",
        "value": 66.72,
        "weight": 63
    },
    {
        "name": "Cecil Keeling",
        "value": 28.88,
        "weight": 3
    },
    {
        "name": "Steven Christiansen",
        "value": 69.47,
        "weight": 47
    },
    {
        "name": "Shari Spinka",
        "value": 27.69,
        "weight": 13
    },
    {
        "name": "Laurence Ortiz",
        "value": 17.55,
        "weight": 89
    },
    {
        "name": "Lionel Schuster",
        "value": 32.55,
        "weight": 51
    },
    {
        "name": "Marilyn Frami",
        "value": 98.28,
        "weight": 66
    },
    {
        "name": "Spencer Macejkovic",
        "value": 17.71,
        "weight": 95
    },
    {
        "name": "Suzanne Maggio",
        "value": 57.56,
        "weight": 26
    },
    {
        "name": "Krystal Turcotte",
        "value": 17.48,
        "weight": 35
    },
    {
        "name": "Rhonda Denesik",
        "value": 5.97,
        "weight": 97
    },
    {
        "name": "Rosie Metz",
        "value": 73.63,
        "weight": 35
    },
    {
        "name": "Laurie Considine",
        "value": 22,
        "weight": 72
    },
    {
        "name": "Alexandra Botsford",
        "value": 55.9,
        "weight": 16
    },
    {
        "name": "Julie Swift",
        "value": 82.24,
        "weight": 84
    },
    {
        "name": "Roxanne Gaylord",
        "value": 28.69,
        "weight": 63
    },
    {
        "name": "Ora Dibbert",
        "value": 99.9,
        "weight": 98
    },
    {
        "name": "Lois Quitzon",
        "value": 88.09,
        "weight": 29
    },
    {
        "name": "Grace Swaniawski",
        "value": 43.1,
        "weight": 68
    },
    {
        "name": "Jim Zulauf",
        "value": 14.11,
        "weight": 85
    },
    {
        "name": "Tommie Schuster",
        "value": 81.32,
        "weight": 13
    },
    {
        "name": "Gerald Predovic",
        "value": 22.9,
        "weight": 20
    },
    {
        "name": "Denise Streich",
        "value": 66.71,
        "weight": 97
    },
    {
        "name": "Mandy Sipes",
        "value": 14.25,
        "weight": 93
    },
    {
        "name": "Joyce Kilback",
        "value": 58.44,
        "weight": 77
    },
    {
        "name": "Edmund Hilll",
        "value": 89.52,
        "weight": 15
    },
    {
        "name": "Ivan Harber",
        "value": 89.48,
        "weight": 74
    },
    {
        "name": "Natalie Steuber",
        "value": 48.72,
        "weight": 86
    },
    {
        "name": "Salvador Champlin",
        "value": 63.02,
        "weight": 21
    },
    {
        "name": "Miguel Murazik",
        "value": 79.52,
        "weight": 99
    },
    {
        "name": "Crystal Bode",
        "value": 76.89,
        "weight": 24
    },
    {
        "name": "Winifred Reichel",
        "value": 71.18,
        "weight": 66
    },
    {
        "name": "Alison Wehner",
        "value": 25.07,
        "weight": 62
    }
]

function App() {

useEffect(() => {
    console.log('knap', knapSack(mock, 50))
    console.log('unbounded', unboundedKnapsack(mock, mock.length - 1, 50))
    console.log('knap recursive', knapSackRecursive(50, mock, mock.length))
},[])

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
    </div>
  );
}

export default App;
