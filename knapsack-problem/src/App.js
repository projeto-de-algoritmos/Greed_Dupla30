import { useEffect, useState } from 'react'
import { knapSackRecursive } from './algorithms/knapsack'
import { iconsMock } from './items/mock'
import Item from './components/Item'
import ItemArea from './components/ItemArea';
import './App.css';

function App() {

    const [items, setItems] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [selectedValuation, setSelectedValuation] = useState([0, 0])
    const [bagWeight, setBagWeight] = useState(20)
    const [solution, setSolution] = useState(null)
    const [showSolution, setShowSolution] = useState(false)


    useEffect(() => {
        randomizeItems()
    }, [])

    useEffect(() => {
        if (selectedItems.length === 0) {
            setSelectedValuation([0, 0])
            return
        }

        let actualResult = selectedItems.reduce((acc, curr) => {
            return [acc[0] + curr.value, acc[1] + curr.weight]
        }, [0, 0])

        setSelectedValuation(actualResult)
    }, [selectedItems])

    const handleSelectItem = (item) => {
        const arrayFiltered = items.filter(el => el.name != item.name)
        setSelectedItems((prevState) => [...prevState, item])
        setItems(arrayFiltered)
    }

    const handleRemoveItem = (item) => {
        if(showSolution) return
        const arrayFiltered = selectedItems.filter(el => el.name != item.name)
        setItems((prevState) => [...prevState, item])
        setSelectedItems(arrayFiltered)
    }

    const finishAttempt = () => {
        setShowSolution(true)
    }

    const resetAttempt = () => {
        setShowSolution(false)
        setSolution(null)
        setSelectedItems([])
        randomizeItems()
    }


    const randomizeItems = () => {
        const size = Math.floor(Math.random() * 20) + 5
        const weight = Math.floor(Math.random() * 120) + 20
        const numbers = new Set([])
        const selected = []

        while (numbers.size < size) {
            numbers.add(Math.floor(Math.random() * 36))
        }
        numbers.forEach((el) => selected.push(iconsMock[el]))

        const solutionList = knapSackRecursive(bagWeight, selected, selected.length)
        setSolution(solutionList)
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
                            Clique nas mercadorias ao lado para ir adicionando à sua carroça e, quando achar que é o suficiente, faça a viagem.<br/>
                            Abaixo te cada item você tem o seu peso (P) e o valor (V) e, ao passar o mouse sobre eles, haverá mais informações.<br/>
                            Ao final, nós te diremos quais items vão te dar o maior lucro, será se é um bom mercador?</p>
                    </div>
                </div>
                <div className='rightArea'>
                    {
                        !showSolution &&
                        <ItemArea>
                            <div style={{ textAlign: 'center', width: '100%' }}>
                                <p>Essas são as mercadorias de hoje.</p>
                                <p>Você irá conseguir carregar {bagWeight}kg.</p>
                            </div>
                            {
                                items.length > 0 ?
                                    items.map((el) => (
                                        <Item item={el} key={Math.random()} selectItem={handleSelectItem} />
                                    ))
                                    :
                                    <p>Sem items...</p>
                            }
                        </ItemArea>
                    }
                    <ItemArea>
                        <div style={{ textAlign: 'center', width: '100%' }}>
                            <p>Esses são as mercadorias selecionadas</p>
                        </div>
                        {
                            selectedItems.length > 0 ?
                                selectedItems.map((el) => (
                                    <Item item={el} key={Math.random()} selectItem={handleRemoveItem} />
                                ))
                                :
                                <div style={{ textAlign: 'center', width: '100%' }}>
                                    <p>Sem mercadorias...</p>
                                </div>

                        }
                        <div style={{ textAlign: 'center', width: '100%' }}>
                            <p>Valor total: {selectedValuation[0]} - Peso: <span style={{ color: selectedValuation[1] > bagWeight ? '#d0342c' : 'black' }}>{selectedValuation[1]}kg</span></p>
                        </div>
                    </ItemArea>


                    {(solution && showSolution) &&
                        <ItemArea>
                            <div style={{ textAlign: 'center', width: '100%' }}>
                                <p>Solução: </p>
                            </div>
                            {solution[1].map(el => <Item item={el} key={el.name} selectItem={() => {}} />)}
                            <div style={{ textAlign: 'center', width: '100%' }}>
                                <p>Valor total: {solution[0]}</p>
                            </div>
                        </ItemArea>
                    }
                    <div style={{ display: 'flex'}}>
                        <button className='buttonClass' type='button' onClick={finishAttempt}>Finalizar</button>
                        <button className='buttonClass' type='button' onClick={resetAttempt}>Reiniciar</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
