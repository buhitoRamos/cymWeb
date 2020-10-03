import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import Selection from '../pages/Selection'
import NotFound from '../pages/NotFound'

const App = () => (

    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/seleccion' component={Selection} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>


    </div>
)

export default App