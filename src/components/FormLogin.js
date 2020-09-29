import React from "react"
import "../components/styles/FormLogin.css"
import $ from "jquery"
import loginPhp from "../backend/Login.php"

class FormLogin extends React.Component {

    state = {
        data: {
            user: "",
            pass: ""
        },
        recived: {
            user: "",
            pass: ""
        }
        
    }

    setState2 =(user, pass)=>{
        this.setState({
            recived: {
                user: user,
                pass: pass
            }
        })
        console.log(user+pass)
        console.log("usuario: "+this.state.recived.user)

    }


    handleClick = () => {
        this.setState({
            data: {
                user: $("#user").val(),
                pass: $("#pass").val()
            }
        })

        $.ajax({
            url: "http://localhost/backend/Login.php",
            data: { us: this.state.data.user, pa: this.state.data.pass },
            dataType: 'json',
            type: 'POST',
            success: ( response)=> {
                let user=response[0].user
                let pass=response[0].pass
                this.setState2(user,pass)
                
            }

        })
    }

render() {
    return (
        <div className="container form-login">

            <div>
                <input
                    id="user"
                    placeholder="Ingrese Usuario"
                    type="text"
                    className="form-control form-input"
                />
            </div>
            <div>
                <input
                    id="pass"
                    placeholder="Ingrese Password"
                    type="password"
                    className="form-control form-input"
                />
            </div>
            <div className="form-btn float-center">
                <button
                    class="btn btn-primary btn-block"
                    type="submit"
                    onClick={this.handleClick}>
                    Ingresar
                    </button>
            </div>

        </div>
    )
}
}
export default FormLogin