import React from "react"
import img from "../images/logoGer.jpeg"
import "../components/styles/Logo.css"

const Logo = () =>(
    <div>
        <img 
        alt=""
        src={img}
        className="float-left logo"
        />
    </div>

)
export default Logo