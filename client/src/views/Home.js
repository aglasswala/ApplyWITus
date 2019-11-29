import React from 'react'

import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			Here is the home page
			<NavLink to="/login">
				<Button> Login </Button>
			</NavLink>
			<NavLink to="/register">
				<Button> Register </Button>
			</NavLink>
		</div>
	)
}

export default Home