import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'

import Dashboard from "./views/Dashboard"
import Login from "./views/Login"

class App extends Component {
    render() {
        return (
            <div>
            	<Switch>
            		<Route exact strict path="/login" component={Login} />
                	<Route component={Dashboard} />
                </Switch>
            </div>
        )
    }
}

export default App