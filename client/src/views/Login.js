import React, { Component, Fragment } from 'react'

import { Grid, Paper, withStyles, Typography, Button, TextField } from "@material-ui/core"
import BackgroundSlider from 'react-background-slider'

import loginStyles from "../styles/loginStyles"
import image1 from "../styles/pictures/background1.jpg"

class Login extends Component {

	state = {
		email: "",
		password: ""
	}

	onChange = (e) => this.setState({[e.target.name]: e.target.value})

	submit = async () => {
		const { email, password } = this.state

		fetch("http://localhost:3001/login", {
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
			<Fragment>
				<BackgroundSlider
				  images={[image1]}
				  duration={2} transition={2} />
				<div className={classes.placeHolderTop}>
					<div className={classes.placeHolderBottom}>
						<div className={classes.signinBox}>
							<div className={classes.signinContainer}>
								<div className={classes.container}>
									<div className={classes.overlay} style={{background: "primary"}}>
										<Typography variant="h3" align="center" style={{color: "white"}}>
											Log In
										</Typography>
									</div>
									<form className={classes.form}>
										<span className={classes.wrapper}>
											<TextField 
													label="Email"
													name="email"
													className={classes.textField}
													onChange={this.onChange}
													style={{marginTop: "30px"}}
												/> 
										</span>
										<span className={classes.wrapper}>
											<TextField 
												label="Password"
												type="password"
												name="password"
												onChange={this.onChange}
												className={classes.textField}
												margin="normal"
											/> 
				                    	</span>
									</form>
									<span className={classes.wrapper}>
										<Button
											variant="contained"
											color="primary"
											className={classes.button}
											onClick={this.submit}
										>
											Submit
										</Button>
									</span>
									<div className={classes.actions}>
										<Button> Forgot Password? </Button>
										<Button> Sign Up </Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default withStyles(loginStyles)(Login)