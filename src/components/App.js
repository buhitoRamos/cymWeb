import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import Selection from '../pages/Selection'
import NotFound from '../pages/NotFound'
import Customers from '../pages/Customers'
import ToPrint from '../pages/ToPrint'
import NewEntry from '../pages/NewEntry'
import Works from '../pages/Works'
import Assistant from '../pages/Assistant'

//Componente de ruteo de paginas.

const App = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/seleccion' component={Selection} />
                <Route path='/clientes' component={Customers} />
                <Route path='/comprobante' component={ToPrint} />
                <Route path='/ingreso' component={NewEntry} />
                <Route path='/trabajos' component={Works}/>
                <Route path='/ayudante' component={Assistant} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </div>
)
export default App