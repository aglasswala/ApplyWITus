import React, { useState, useEffect } from 'react'

import { InputAdornment, IconButton, FormHelperText, CssBaseline, Grid, Paper, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, CircularProgress } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Validator from 'validator'

import loginStyles from '../styles/loginStyles'

const Login = ({ ...props }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [loading, isLoading] = useState(false)
	const [errors, setErrors] = useState({})
	const [showPassword, setShowPassword] = useState(false)
	const [rememberMe, setRememberMe] = useState(false)

	const handleEmail = (e) => {
		return setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		return setPassword(e.target.value)
	}

	const handleLoading = (loading) => {
		return isLoading(loading)
	}	

	const handleErrors = (errs) => {
		return setErrors(errs)
	}	

	const handleShowPassword = () => {
		return setShowPassword(!showPassword)
	}

	const handleRememberMe = () => {
		return setRememberMe(!rememberMe)
	}

	const validate = (email, password) => {
	    const errors = {}
	    if(!Validator.isEmail(email)) errors.email = "Invalid Email";
	    if(!password) errors.password = "Can't be blank";
	    return errors
	}

	const handleClick = async (e) => {
		e.preventDefault()
		handleLoading(true)

		const val = validate(email, password)
		
		if (Object.keys(val).length !== 0) {
			handleLoading(false)
			return handleErrors(val)
		}

		fetch("http://localhost:3001/login", {
			method: "post",
			headers: {
				'Content-Type': "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password,
				remember: rememberMe
			})
		})
		.then(response => response.json()) 
		.then(result => {
			if (result.err) {
				throw new Error(result.err)
			}

			if (result.result === "success") {
				handleLoading(false)
				localStorage.setItem('cool-jwt', result.token)
				props.history.push('/dashboard')
			}
		})
		.catch(err => {
			handleLoading(false)
			handleErrors({ err })
		})
	}

	useEffect(() => {
		if (localStorage.getItem("cool-jwt")) {
			props.history.push("/dashboard")
		}
	})

	const classes = loginStyles()
	return (
		<div>
			<CssBaseline />
				{loading ? 
					<Grid
					  container
					  direction="column"
					  justify="center"
					  alignItems="center"
					  className={classes.fullHeight}
					>
						<Grid item>
							<CircularProgress size={128} />		
						</Grid>
					</Grid> : null
				}
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
						{ errors.err ? <FormHelperText error>Invalid Email or Password</FormHelperText> : null }
						<form className={classes.form}>
					    	<TextField
					    		error={errors.email}
					       		variant="filled"
					       		margin="normal"
					       		required
					       		fullWidth
					       		disabled={loading}
					       		id="email"
					       		label="Email Address"
					       		name="email"
					       		autoComplete="email"
					       		autoFocus
					       		onChange={handleEmail}
					     	/>
					     	{errors.email ? <FormHelperText error>Invalid Email</FormHelperText> : null}
					     	<TextField
					     		error={errors.password}
					       		variant="filled"
					       		margin="normal"
					       		required
					       		fullWidth
					       		disabled={loading}
					       		name="password"
					       		label="Password"
					       		type={showPassword ? "text" : "password"}
					       		id="password"
					       		autoComplete="current-password"
					       		onChange={handlePassword}
					       		InputProps={{
					       		    endAdornment: (
					       		      <InputAdornment position='end'>
					       		        <IconButton
					       		          onClick={handleShowPassword}>
					       		          {!showPassword && <Visibility />}
					       		          {showPassword && <VisibilityOff />}
					       		        </IconButton>
					       		      </InputAdornment>
					       		    ),
					       		  }}
					     	/>
					     	{errors.password ? <FormHelperText error>Invalid Password</FormHelperText> : null}
						    <FormControlLabel
						      	control={<Checkbox onClick={handleRememberMe} value="remember" color="primary" />}
						       	label="Remember me"
						    />
						    <Button
						       	type="submit"
						       	fullWidth
						       	variant="contained"
						       	color="primary"
						       	disabled={loading}
						       	className={classes.submit}
						       	onClick={handleClick}
						    >
						      	Sign In
						    </Button>
						    <Grid container>
						       	<Grid item xs>
						        	<Button href="#">
						           		Forgot password?
						         	</Button>
						       	</Grid>
						       	<Grid item>
						       		<NavLink to="/register">
							         	<Button>
							           		{"Don't have an account? Sign Up"}
							         	</Button>
							        </NavLink>
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