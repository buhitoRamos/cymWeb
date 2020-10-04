import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import Selection from '../pages/Selection'
import NotFound from '../pages/NotFound'
import Clientes from '../pages/Clientes'

const App = () => (

    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/seleccion' component={Selection} />
                <Route path='/clientes' component={Clientes} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>


    </div>
)

export default App