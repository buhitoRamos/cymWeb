import React from "react"
import "../components/styles/FormLogin.css"
import $ from "jquery"

class FormLogin extends React.Component {
    
   
   

    render() {
       

        const {handleChange, handleChangeChk, handleSubmit, handleClick, estado} = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className="container form-login">
                    <div>
                        <input
                            id="user"
                            onChange={handleChange}
                            placeholder="Ingrese Usuario"
                            type="text"
                            className="form-control form-input rounded-pill"
                        />
                    </div>
                    <div className="input-group-prepend">
                        <input
                            id="pass"
                            onChange={handleChange}
                            placeholder="Ingrese Password"
                            type={estado.aux.chk}
                            className="form-control form-input rounded-pill"
                        />
                        <input
                            type="checkbox"
                            className="checkbox checkbox-primary form-input-ch"
                            onChange={handleChangeChk}
                        />
                    </div>
                    <div className="form-btn float-center">
                        <input
                            id="sub"
                            className="btn btn-primary btn-block"
                            type="submit"
                            value="ingresar"
                        />                        
                    </div>
                </div>
            </form>
        )
    }
}
export default FormLogin

