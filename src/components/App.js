import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import Seleccion from '../pages/Seleccion'

const App = () => (

    <div>       
        <BrowserRouter>
        <Switch>
        {/* <Route path='/login' component={Login} /> */}
        <Route path='/seleccion' component={Seleccion} />
        </Switch>
        </BrowserRouter>

         
    </div>
)

export default App