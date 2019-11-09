import React, { Component, Fragment } from 'react'

import { Grid, Paper, withStyles, Typography, Button, TextField } from "@material-ui/core"
import BackgroundSlider from 'react-background-slider'

import loginStyles from "../styles/loginStyles"
import image1 from "../styles/pictures/background1.jpg"

class Login extends Component {

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