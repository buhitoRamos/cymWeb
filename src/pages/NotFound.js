import React from 'react'
import NavBar from "../components/NavBar"
import BtnNavegation from "../components/BtnNavegation"

const NotFound = () => (
    <div>
        <NavBar
            txt="Not Found"
            type="hidden"
        />
        <div>
            <BtnNavegation
                url="/login"                
            />
        </div>

    </div>
)
export default NotFound

