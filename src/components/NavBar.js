import React from 'react'
import exit2 from "../images/exit2.png"

class NavBar extends React.Component {
   

    handleExit=()=>{
        const exit="exit"
        let token = JSON.stringify(exit)
            localStorage.setItem('token', token);
            this.props.history.push('/seleccion')
    }
    render(){
        const {txt, type, history, handleChange} = this.props
        
        return(
            <div>
        <nav className="navbar  navbar-dark bg-primary">
            <h1 className="navbar-brand h1">{txt}</h1>

            <form className="form-inline float-right">
                <input className="form-control mr-sm-2"
                id="search" 
                type={type} 
                placeholder={type} 
                onChange={handleChange} />
                <img src={exit2}
                onClick={this.handleExit}
                    className="btn float-right"                    
                        width="60"
                    />
            </form>   
        </nav>

    </div>

        )
    }


}
export default NavBar


