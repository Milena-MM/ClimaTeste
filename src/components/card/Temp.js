import './card.css'

function Card (props){
    return(
        <div className='diaTemp'>
            <p>{props.diaDaSemana}</p>
            <img/>
            <h2>25°C</h2>
            <p>Alerta</p>
            <p>Hoje não irá chover e os ventos estarão fortes, um ótimo dia para lavar as roupas</p>
        </div>   
    )
};



export default Card;