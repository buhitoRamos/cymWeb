import React from "react"
import Logo from "../components/Logo"
import FormLogin from "../components/FormLogin"
import NavBar from "../components/NavBar"
import $ from "jquery"

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
            toInto: "false",
            url:""
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
            this.setState({
                aux: {
                    toInto: true,
                    url: ""
                }
            })
            console.log("toInto: "+this.state.aux.toInto)
            
            
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
            <div>
                <NavBar
                    txt="Login"
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