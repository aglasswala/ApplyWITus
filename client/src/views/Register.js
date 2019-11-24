import React, { Component, Fragment } from 'react'

import { Button, FormControlLabel, TextField, Checkbox, Link, Grid, Typography, Container, withStyles } from '@material-ui/core';

import registerStyles from "../styles/registerStyles"

class Register extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    register = async () => {
        const { email, password } = this.state

        fetch("http://localhost:3001/register", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(response => response.json())
            .then(result => {
                if (result.result === "success") {
                    this.props.history.push("/dashboard")
                    this.props.isAuth(email)
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        const { classes } = this.props
        return (
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <div className={classes.titlePaper}>
                        <Typography component="h1" variant="h5" style={{ background: "primary" }}>
                            Register
                    </Typography>
                    </div>
                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
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
                                    autoComplete="lname"
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
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Send emails updating me about new job opportunities."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
          </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
              </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}

export default withStyles(registerStyles)(Register)