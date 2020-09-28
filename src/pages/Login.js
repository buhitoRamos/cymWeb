import React from "react"
import Logo from "../components/Logo"
import FormLogin from "../components/FormLogin"
import NavBar from "../components/NavBar"

class Login extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <NavBar
                    txt="Login"
                />
                <div className="float-left">
                    <Logo />
                    <FormLogin />

                </div>
            </div>
        )
    }
}
export default Login