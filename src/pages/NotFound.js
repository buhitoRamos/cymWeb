import React from 'react'
import NavBar from "../components/NavBar"
import BtnNavegation from "../components/BtnNavegation"

const NotFound = () => (
    <div>
        <NavBar
            txt="Not Found"
        />
        <div>
            <BtnNavegation
                url="/login"
            />
        </div>

    </div>
)
export default NotFound

