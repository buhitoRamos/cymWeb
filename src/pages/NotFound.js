import React from 'react'
import NavBar from "../components/NavBar"
import BtnNavegation from "../components/BtnNavegation"

//Esta es la pagina NotFound que se muestra si no se esta logueado o si se va a una url inválida.
const NotFound = () => (
    <div>
        <NavBar
            txt="Not Found"
            type="hidden"
            btnExit="hidden"
            btnHome="hidden"
            newEntry="hidden"
            NewCustomer="hidden"
        />
        <div>
            <BtnNavegation
                url="/login"                
            />
        </div>
    </div>
)
export default NotFound

