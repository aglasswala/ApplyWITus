import React, { useState } from 'react'

import { CssBaseline, Grid, Paper, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import loginStyles from '../styles/loginStyles'

const Login = ({ ...props }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleEmail = (e) => {
		return setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		return setPassword(e.target.value)
	}

	const handleClick = (e) => {
		e.preventDefault()
		fetch("http://localhost:3001/login", {
			method: "post",
			headers: {
				'Content-Type': "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(response => response.json()) 
		.then(result => {
			if (result.result === "success") {
				props.history.push('/dashboard')
			}
		})
		.catch(err => console.log(err)) // do something with this error
	}

	const classes = loginStyles()
	return (
		<div>
			<CssBaseline />
			<Grid container className={classes.root}>
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
						 	<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
						  Sign in
						</Typography>
						<form className={classes.form}>
					    	<TextField
					       		variant="filled"
					       		margin="normal"
					       		required
					       		fullWidth
					       		id="email"
					       		label="Email Address"
					       		name="email"
					       		autoComplete="email"
					       		autoFocus
					       		onChange={handleEmail}
					     	/>
					     	<TextField
					       		variant="filled"
					       		margin="normal"
					       		required
					       		fullWidth
					       		name="password"
					       		label="Password"
					       		type="password"
					       		id="password"
					       		autoComplete="current-password"
					       		onChange={handlePassword}
					     	/>
						    <FormControlLabel
						      	control={<Checkbox value="remember" color="primary" />}
						       	label="Remember me"
						    />
						    <Button
						       	type="submit"
						       	fullWidth
						       	variant="contained"
						       	color="primary"
						       	className={classes.submit}
						       	onClick={handleClick}
						    >
						      	Sign In
						    </Button>
						    <Grid container>
						       	<Grid item xs>
						        	<Button href="#" variant="body2">
						           		Forgot password?
						         	</Button>
						       	</Grid>
						       	<Grid item>
						         	<Button href="#" variant="body2">
						           		{"Don't have an account? Sign Up"}
						         	</Button>
						       	</Grid>
						    </Grid>
					   	</form>
					</div>
				</Grid>
			</Grid>	
		</div>
	)
}

export default Login