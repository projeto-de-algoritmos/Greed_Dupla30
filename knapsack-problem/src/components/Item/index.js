import './item.css'

export default function Item({item}) {
    return (
        <div className="itemClass">
            <img src={item.icon} height={48} width={48} />
            {/* <p style={{fontSize: '12px'}}>{item.name} <br/> Peso: {item.weight} <br/> Valor: {item.value}</p>                                */}
        </div>
    )
}