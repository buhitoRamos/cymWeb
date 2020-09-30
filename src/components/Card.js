import React from 'react'
import circleImg from '../images/circles.png'
import './styles/Card.css'
class Card extends React.Component {
    render() {

        const { title, description, rightColor, leftColor } = this.props
        return (
            <div className="card mx-auto Work-Card"
                style={{
                    backgroundImage: `url(${circleImg}), linear-gradient(to right, ${rightColor}, ${leftColor})`
                }}
            >
                <div className="card-body">
                    <div className="row center">                        
                        <div className="col-7 Work-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card

