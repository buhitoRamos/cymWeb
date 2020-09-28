import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "../pages/Login"

const App = () => (

    <div>       
        <BrowserRouter>
        <Switch>
        <Route path='/login' component={Login} />
        </Switch>
        </BrowserRouter>

         
    </div>
)

export default App