import React from "react"
import Logo from "../components/Logo"
import FormLogin from "../components/FormLogin"
import NavBar from "../components/NavBar"
import $ from "jquery"

class Login extends React.Component {
    
    state = {
        toInto:false
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
                     />

                </div>
            </div>
        )
    }
}
export default Login