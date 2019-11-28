import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const theme = createMuiTheme({
	palette: {
		primary: {
  			main: '#2196f3'
   		},
    	secondary: {
    		main: '#61D095'
    	}
  	}
})

ReactDOM.render(
		<Router>
			<MuiThemeProvider theme={theme}>
				<Route component={App} />
			</MuiThemeProvider>
		</Router>
		, document.getElementById('root'));