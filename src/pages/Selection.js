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
        
        if (this.state.isLoged) {
            const { history } = this.props 
            return (
                <div>
                    <div>
                        <NavBar
                            txt="Selección"
                            type="hidden"
                            history={history}
                            btnHome="hidden"
                            NewCustomer="hidden"
                            newEntry="hidden"
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