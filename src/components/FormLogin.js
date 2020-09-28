import React from "react"
import "../components/styles/FormLogin.css"
import $ from "jquery"
import loginPhp from "../backend/Login.php"

class FormLogin extends React.Component {

    state = {
        data: {
            user: "",
            pass: ""
        }
    }

    handleClick = () => {
        this.setState({
            data: {
                user: $("#user").val(),
                pass: $("#pass").val()
            }
        })
        var us = this.state.data.user;
        $.ajax({
            url: { loginPhp },
            data: { us },
            type: 'POST',
            success: function (response) {
                console.log(response)
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