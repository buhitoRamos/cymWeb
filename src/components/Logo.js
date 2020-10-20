import React from "react"
import img from "../images/logoGer.jpeg"
import "../components/styles/Logo.css"

//Este es un componente que solo contiene el logotipo

const Logo = () =>(
    <div>
        <img 
        alt="Logotipo"
        src={img}
        className="float-left logo"        
        />
    </div>

)
export default Logo