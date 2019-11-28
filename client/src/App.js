import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Dashboard from "./views/Dashboard"
import Login from "./views/Login"
import Register from "./views/Register"
import PrivateRoute from "./utils/PrivateRoute"

const App = () => {
    return (
        <div>
            <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={Register} /> 
                <Route component={Login} />
            </Switch>
        </div>
    )
}
export default App