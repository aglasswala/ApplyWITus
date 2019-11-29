import React from 'react'

import { Button, TextField, Grid } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import onboardingStyles from '../../styles/onboardingStyles'

const OnboardingTwo = ({ ...props }) => {
	const classes = onboardingStyles()
	return (
		<div>
			<Grid
			  container
			  direction="column"
			  justify="center"
			  alignItems="center"
			>	
				<Grid item>
					<Grid
					  container
					  direction="row"
					  justify="center"
					  alignItems="center"
					>	
						<Grid item>
							<div className={classes.wrapper}>
								<TextField 
								 	label="First Name" 
								 	name="firstName"
								 	type="text" 
								 	required 
								/>
							</div>
						</Grid>
						<Grid item>
							<div className={classes.wrapper}>
								<TextField 
								 	label="Last Name" 
								 	name="lastName"
								 	type="text" 
								 	required 
								/>	
							</div>
						</Grid>
					</Grid>
				</Grid>
				<Grid item style={{width: "100%"}}>
					<div className={classes.wrapper}>
						<TextField 
						 	label="Street" 
						 	name="street"
						 	type="text" 
						 	fullWidth
						 	required
						/>	
					</div>
				</Grid>
				<Grid item style={{width: "100%"}}>
					<div className={classes.wrapper}>
						<TextField 
						 	label="City" 
						 	name="city"
						 	type="text" 
						 	fullWidth
						 	required 
						/>	
					</div>
				</Grid>
				<Grid item style={{width: "100%"}}>
					<Grid
					  container
					  direction="row"
					  justify="center"
					  alignItems="center"
					>	
						<Grid item>
							<div className={classes.wrapper}>
								<TextField 
								 	label="State" 
								 	name="state"
								 	type="text" 
								 	required 
								/>
							</div>
						</Grid>
						<Grid item>
							<div className={classes.wrapper}>
								<TextField 
								 	label="Zip" 
								 	name="zip"
								 	type="text" 
								 	required 
								/>	
							</div>
						</Grid>
					</Grid>
				</Grid>
				<Grid item style={{width: "100%"}}>
					<div className={classes.wrapper}>
						<TextField 
						 	label="Phone Number" 
						 	name="phoneNumber"
						 	type="text" 
						 	fullWidth
						 	required 
						/>	
					</div>
				</Grid>
				<Grid item style={{width: "100%"}}>
					<div className={classes.wrapper}>
						<input
							accept=".pdf,.doc,.docx"
							className={classes.input}
							style={{ display: 'none' }}
							id="raised-button-file"
							type="file"
							name="file"
						/>
						<label htmlFor="raised-button-file">
							<Button component="span" className={classes.button}>Upload Resume</Button>
						</label>
					</div>
				</Grid>
				<Grid item style={{width: "100%"}}>
					<div className={classes.wrapper}>
						<NavLink to="/onboarding/three">
							<Button variant="contained" component="span" color="primary" className={classes.uploadButton}>Next</Button>
						</NavLink>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default OnboardingTwo