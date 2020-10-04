import React from 'react'
import Card from '../components/Card'


const CardList = ({ card, history }) => (
    <div>
        {
            
            card.map(card => {
                return (
                    <div className="row row-cols-2">
                    <Card                                      
                        title={card.title}
                        description={card.description}
                        rightColor={card.rightColor}
                        leftColor={card.leftColor} 
                        history={history}                       
                    />
                    </div>
                )
            })
        }
    </div>
)


export default CardList
