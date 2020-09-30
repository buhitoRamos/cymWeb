import React from "react"
import "../components/styles/FormLogin.css"
import $ from "jquery"

class FormLogin extends React.Component {
    
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
            chk: "password"
        }
    }

    handleSubmit = e => {
        this.handleClick()
        e.preventDefault();
    }

    handleChangeChk = () => {
        var myCheck = this.state.aux.chk
        console.log(myCheck)
        if (myCheck == "password") {
            myCheck = "text"
        } else {
            myCheck = "password"
        }
        this.setState({
            aux: {
                chk: myCheck
            }
        })
    }

    setStateRecived = (user, pass) => {
        this.setState({
            recived: {
                user: user,
                pass: pass
            }
        })
        if ((this.state.data.user + this.state.data.pass) ==
            (this.state.recived.user + this.state.recived.pass)
        ) {
            console.log("es igual")
        } else {
            console.log("datos que tengo: " + this.state.data.user + " " + this.state.data.pass)
            console.log("datos que llegan: " + this.state.recived.user + " " + this.state.recived.pass)
            console.log("es diferente")
        }
    }

    handleChange = e => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.id]: e.target.value,
            }
        })
    }



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
                }
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container form-login">
                    <div>
                        <input
                            id="user"
                            onChange={this.handleChange}
                            placeholder="Ingrese Usuario"
                            type="text"
                            className="form-control form-input"
                        />
                    </div>
                    <div className="input-group-prepend">
                        <input
                            id="pass"
                            onChange={this.handleChange}
                            placeholder="Ingrese Password"
                            type={this.state.aux.chk}
                            className="form-control form-input"
                        />
                        <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                            className="form-input-ch"
                            onChange={this.handleChangeChk}
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

