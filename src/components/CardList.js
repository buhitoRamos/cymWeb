import React from 'react'
import Card from '../components/Card'

//Componente que genera la listas de tarjetas para elejir los diferentes modulos.
const CardList = ({ card, history }) => (
    <div>
        {
            card.map(card => {
                return (                   
                    <Card
                        key={card.id.toString()}                                      
                        title={card.title}
                        description={card.description}
                        rightColor={card.rightColor}
                        leftColor={card.leftColor} 
                        history={history}                       
                    />                   
                )
            })
        }
    </div>
)
export default CardList
