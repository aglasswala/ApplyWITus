import React, { useState, useEffect } from 'react'

import { CssBaseline, Button, TextField, Link, Grid, Typography, Container } from '@material-ui/core';

import registerStyles from "../styles/registerStyles"

const Register = ({ ...props }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleFirstName = (e) => {
		return setFirstName(e.target.value)
    }
    
    const handleLastName = (e) => {
		return setLastName(e.target.value)
    }

    const handleEmail = (e) => {
		return setEmail(e.target.value)
    }
    
    const handlePassword = (e) => {
		return setPassword(e.target.value)
    }
    
    const handleConfirmPassword = (e) => {
        return setConfirmPassword(e.target.value)
    }

    const handleClick = (e) => {
		e.preventDefault()
		fetch("http://localhost:3001/register", {
			method: "post",
			headers: {
				'Content-Type': "application/json"
			},
			body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
				email: email,
                password: password,
                repassword: confirmPassword
			})
		})
		.then(response => response.json()) 
		.then(result => {
			if (result.result === "success") {
                localStorage.setItem("cool-jwt", result.token)
				props.history.push('/onboarding')
			}
		})
		.catch(err => console.log(err)) // do something with this error
    }

    useEffect(() => {
        if (localStorage.getItem("cool-jwt")) {
            props.history.push("/dashboard")
        }
    })

    const classes = registerStyles()
    return (
        <div>
            <CssBaseline />
            <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{height: "100vh"}}
            >
                <Grid item>
                    <div className={classes.paper}>
                        <div className={classes.titlePaper}>
                            <Typography component="h1" variant="h5" style={{ background: "primary" }}>
                                Register
                            </Typography>
                        </div>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="firstName"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        onChange={handleFirstName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lastName"
                                        onChange={handleLastName}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={handleEmail}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={handlePassword}
                                  />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        id="confirmPassword"
                                        autoComplete="confirmPassword"
                                        onChange={handleConfirmPassword}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleClick}
                            >
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="./login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
          </div>
        )
}

export default Register