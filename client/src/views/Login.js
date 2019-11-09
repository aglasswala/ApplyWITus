import React, { Component, Fragment } from 'react'

import { Grid, Paper, withStyles, Typography, Button, TextField } from "@material-ui/core"

import loginStyles from "../styles/loginStyles"

class Login extends Component {

	render() {
		const { classes } = this.props
		return (
			<Fragment>
				<div className={classes.placeHolderTop}>
					<div className={classes.placeHolderBottom}>
						<div className={classes.signinBox}>
							<div className={classes.signinContainer}>
								<div className={classes.container}>
									<div className={classes.overlay} style={{background: "primary"}}>
										<Typography variant="h3" align="center">
											Log In
										</Typography>
									</div>
									<form className={classes.form}>
										<span className={classes.wrapper}>
											<TextField 
													label="Email"
													className={classes.textField}
													style={{marginTop: "30px"}}
												/> 
										</span>
										<span className={classes.wrapper}>
											<TextField 
												label="Password"
												type="password"
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
											>
												Submit
										</Button>
									</span>
									<div className={classes.actions}>
										<Button> Forgot Password?</Button>
										<Button
										> Sign Up 
										</Button>
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