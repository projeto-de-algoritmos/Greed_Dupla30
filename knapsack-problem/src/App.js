import { useEffect, useState } from 'react'
import './App.css';
import { knapSackRecursive, unboundedKnapsack, knapSack } from './algorithms/knapsack'
import { iconsMock } from './items/mock'
import Item from './components/Item'
import ItemArea from './components/ItemArea';
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

    const [items, setItems] = useState([])
    const [selectedItems, setSelectedItemds] = useState([])
    const [bagWeight, setBagWeight] = useState(20)
    const [solution, setSolution] = useState(null)
    const [showSolution, setShowSolution] = useState(false)


    useEffect(() => {
        // console.log('knap', knapSack(mock, 50))
        // console.log('unbounded', unboundedKnapsack(mock, mock.length - 1, 50))
        // console.log('knap recursive', knapSackRecursive(80, iconsMock, iconsMock.length))
        randomizeItems()
    }, [])

    useEffect(() => {
        console.log(items)
        if (items.length === 0) return
        const solutionList = knapSackRecursive(bagWeight, items, items.length)
        console.log('solution', solutionList)
        setSolution(solutionList)
    }, [items])


    const randomizeItems = () => {
        const size = Math.floor(Math.random() * 20) + 5
        const weight = Math.floor(Math.random() * 120) + 20
        const numbers = new Set([])
        const selected = []

        while (numbers.size < size) {
            console.log('ue')
            numbers.add(Math.floor(Math.random() * 36))
        }
        numbers.forEach((el) => selected.push(iconsMock[el]))

        setBagWeight(weight)
        setItems(selected)
    }

    return (
        <div className="App">

            <div className="mainArea">
                <div className='leftArea'>
                    <div className='merchant'>
                        <img className='merchantImg' src='merchant.png' alt="Merchant" />
                        <p style={{ fontSize: '15px', color: 'white' }}>Olá! Seja bem vindo ao nosso trabalho de projetos de algoritmos!<br /><br />
                            Hoje você será um mercador que stá acampado próximo a uma vila. Você possui mercadorias e deve transportar até vila o que te dará mais lucro, mas respeitando o peso máximo que você consegue carregar. <br /><br />
                            Clique nos items ao lado para ir adicionando à sua carroça e, quando achar que é o suficiente, faça a viagem.
                            Ao final, nós te diremos quais items vão te dar o maior lucro, será se é um bom mercador?</p>
                    </div>
                </div>
                <div className='rightArea'>
                    <ItemArea>
                        {
                            items.length > 0 ?
                                items.map((el) => (
                                    <Item item={el} key={el.name}/>
                                ))
                                :
                                <p>Sem items por hoje</p>
                        }
                    </ItemArea>
                    {(solution && showSolution) &&
                    <ItemArea>
                        {solution[1].map(el => <Item item={el} key={el.name}/>)}
                    </ItemArea>
                    }
                </div>

            </div>
        </div>
    );
}

export default App;
