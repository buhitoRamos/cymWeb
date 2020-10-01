import React from 'react'
import btn from '../images/btn.png'
import { Link } from 'react-router-dom'

const BtnNavegation = ({ url }) => (

    <div>
        <Link to={url}>
            <div className="container">
                <img src={btn}
                    className="rounded mx-auto d-block p-5"
                />
            </div>
            <div className="text-center">
                <h1>Click to Login</h1>
            </div>

        </Link>

    </div>



)
export default BtnNavegation