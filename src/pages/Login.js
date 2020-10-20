import React from "react"
import Logo from "../components/Logo"
import FormLogin from "../components/FormLogin"
import NavBar from "../components/NavBar"
import $ from "jquery"

//Esta es la pagina del login
class Login extends React.Component {

    state = {
        data: {
            user: "",
            pass: ""
        },
        recived: {
            user: "",
            pass: "",
            aproved: false
        },
        aux: {
            chk: "password",
            selected: true,
            toInto: "false",
            url: "/login",
            wrongUser: ""

        }
    }

    //Este evento se encarga dl logeo
    handleSubmit = e => {
        this.handleClick()
        e.preventDefault();
    }

    /*
    Este evento cambia el tipo de input de texto a password
    para poder visualizar la clave tipeada
    */
    handleChangeChk = () => {

        var myCheck = this.state.aux.chk
        if (myCheck === "password") {
            myCheck = "text"
        } else {
            myCheck = "password"
        }
        this.setState({
            aux: {
                chk: myCheck,
            }
        })
    }

    /*
    Esta función se encarga de comprar el usuario y clave que se envia que coinsida
    con el que llega en el response, si es válido genera el token y redirecciona
    a seleccion
    */
    setStateRecived = (user, pass) => {
        this.setState({
            recived: {
                user: user,
                pass: pass
            }
        })
        if ((this.state.data.user + this.state.data.pass) ===
            (this.state.recived.user + this.state.recived.pass)
        ) {
            console.log("es igual")
            this.setState({
                aux: {
                    toInto: "token-31576533",
                    url: "/seleccion"
                }
            })
            this.saveToken(this.state.aux.toInto)
            this.props.history.push('/seleccion')
        }
    }

    //Esta función guarda en el localStorage el token
    saveToken = (toInto) => {
        let token = JSON.stringify(toInto)
        localStorage.setItem('token', token);

    }

    //Este evento capura lo que se registra en los input.
    handleChange = e => {
        console.log("handlechange: " + this.state.aux.chk)
        this.setState({
            data: {
                ...this.state.data,
                [e.target.id]: e.target.value,
            },
            aux: {
                ...this.state.aux,                
                wrongUser: ""
            }
        })

    }
    
    //Envia usuario y clave al backend, y muestra leyenda si es incorrecto.
    handleClick = () => {
        $.ajax({
            url: "http://localhost/backend/Login.php",
            data: { us: this.state.data.user, pa: this.state.data.pass },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                try {
                    var { user, pass } = ""
                    user = response[0].user
                    pass = response[0].pass
                    this.setStateRecived(user, pass)
                } catch {
                    user = ""
                    pass = ""
                    this.setState({
                        aux: {
                            chk: "password",
                            wrongUser: "Ingrese usuario y password válidos"
                        }
                    })
                    this.saveToken(this.state.aux.toInto)
                    
                }
            }
        })
    }

    render() {
        const { history } = this.props
        return (
            <div>
                <NavBar
                    txt="Login"
                    type="hidden"
                    history={history}
                    btnExit="hidden"
                    btnHome="hidden"
                    newEntry="hidden"
                    NewCustomer="hidden"
                />
                <div className="float-left">
                    <Logo />
                    <FormLogin
                        handleChange={this.handleChange}
                        handleChangeChk={this.handleChangeChk}
                        handleClick={this.handleClick}
                        handleSubmit={this.handleSubmit}
                        estado={this.state}
                    />
                </div>
            </div>
        )
    }
}
export default Login