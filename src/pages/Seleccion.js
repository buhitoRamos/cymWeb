import React from 'react'
import CardList from '../components/CardList'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo.json'

class Seleccion extends React.Component {

    state = {

        data: CardInfo
        

    }

    render() {
        return (
            <div>
                <div>
                    <NavBar
                        txt="Selección"
                    />
                </div>
                <div className="container">
                    <CardList
                        card={this.state.data}
                    />
                </div>
                </div>
                
        )
    }

}
export default Seleccion