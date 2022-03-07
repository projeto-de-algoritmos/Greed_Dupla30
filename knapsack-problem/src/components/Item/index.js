import './item.css'
import ReactTooltip from 'react-tooltip'

export default function Item({ item, selectItem }) {
    return (
        <div data-tip data-for={item.name} className="itemClass" onClick={() => selectItem(item)}>
            <img src={item.icon} height={48} width={48} />
            <p style={{ fontSize: '8px', margin: 0 }}>P: {item.weight} - V: {item.value}</p>
            <ReactTooltip id={item.name} type="dark" effect="float" place="top">
                <p>{item.name}</p>
                <p>Valor do item: {item.value}</p>
                <p>Peso do item: {item.weight}</p>
            </ReactTooltip>
        </div>
    )
}