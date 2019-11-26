import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'

import Dashboard from "./views/Dashboard"
import Login from "./views/Login"
import Register from "./views/Register"


class App extends Component {

    state = {
        email: "",
        isAuth: false
    }

    isAuthenticated = (email) => {
        this.setState({
            isAuth: true,
            email: email
        })
    }

    render() {
        return (
            <div>
            	<Switch>
            		<Route exact strict path="/dashboard" component={({...props}) => <Dashboard {...props} email={this.state.email} /> } />
                    <Route exact strict path="/register" component={({...props}) => <Register {...props} />} /> 
                	<Route component={({...props}) => <Login {...props} isAuth={this.isAuthenticated} />} />
                </Switch>
            </div>
        )
    }
}

export default App