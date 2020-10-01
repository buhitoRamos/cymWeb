import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import Seleccion from '../pages/Seleccion'
import NotFound from '../pages/NotFound'

const App = () => (

    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/seleccion' component={Seleccion} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>


    </div>
)

export default App