import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import Selection from '../pages/Selection'
import NotFound from '../pages/NotFound'
import Customers from '../pages/Customers'
import ToPrint from '../pages/ToPrint'
import NewEntry from '../pages/NewEntry'

const App = () => (

    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/seleccion' component={Selection} />
                <Route path='/clientes' component={Customers} />
                <Route path='/comprobante' component={ToPrint} />
                <Route path='/ingreso' component={NewEntry} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>


    </div>
)

export default App