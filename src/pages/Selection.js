import React from 'react'
import CardList from '../components/CardList'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo.json'
import NotFound from './NotFound'

class Selection extends React.Component {

    state = {

        data: CardInfo,
        isLoged: false
    }

    componentDidMount() {
        let token = ""
        let tk = localStorage.getItem('token')
        token = JSON.stringify(tk)

        const validaToken = token.includes("token-31576533")
        this.setState({
            isLoged: validaToken
        })
    }
    

    render() {
        const { history } = this.props 
        if (this.state.isLoged) {
            return (
                <div>
                    <div>
                        <NavBar
                            txt="Selección"
                        />
                    </div>
                    <div className="container">
                        <CardList
                        history={history}
                        card={this.state.data}
                        />
                    </div>
                </div>

            )
        } else {

            return (
                <div>
                    <NotFound />

                </div>
            )
        }

    }
}
export default Selection