import React from 'react'
import exit from "../images/exit.png"
import back from "../images/back.png"

class NavBar extends React.Component {


    handleExit = e => {
        const exit = "exit"
        let token = JSON.stringify(exit)
        localStorage.setItem('token', token);
        this.props.history.push('/login')
        e.preventDefault();

    }
    handleHome = e => {
        this.props.history.push('/seleccion')
        e.preventDefault();
    }
    render() {
        const { txt, type, history, handleChange, btnExit, btnHome } = this.props

        return (
            <div>
                <nav className="navbar  navbar-dark bg-primary">
                    <h1 className="navbar-brand h1">{txt}</h1>

                    <form className="form-inline float-right">
                        <input className="form-control mr-sm-2"
                            id="search"
                            type={type}
                            placeholder={type}
                            onChange={handleChange} />
                        <div    
                            hidden={btnHome}>
                            <img src={back}
                                onClick={this.handleHome}
                                className="btn float-right"
                                width="60"
                            />
                        </div>
                        <div
                            hidden={btnExit}>
                            <img src={exit}
                                onClick={this.handleExit}
                                className="btn float-right"
                                width="60"
                            />
                        </div>

                    </form>
                </nav>

            </div>

        )
    }


}
export default NavBar


