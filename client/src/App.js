import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Dashboard from "./views/Dashboard"
import Login from "./views/Login"
import Register from "./views/Register"
import PrivateRoute from "./utils/PrivateRoute"
import Onboarding from './views/Onboarding'
import Home from './views/Home'

const App = () => {
    return (
        <div>
            <Switch>
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/onboarding" component={Onboarding} />
                <Route exact path="/register" component={Register} /> 
                <Route exact path="/login" component={Login} /> 
                <Route component={Home} />
            </Switch>
        </div>
    )
}
export default App