import React, { Component } from "react"

import { withStyles, Grid, Button, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, TextField } from "@material-ui/core"

import applyToJobsStyles from "../styles/applyToJobsStyles"
import ApplyToJobsTable from "../components/ApplyToJobsTable"
import upload from '../api/api'

class ApplyToJobs extends Component {

	state = {
		applyOpen: false,
		firstName: "",
		lastName: "",
		email: this.props.email,
		phoneNumber: "",
		street: "",
		city: "",
		state: "",
		zip: "",
		file: {}
	}

	handleApplyClose = () => {
		this.setState({
			applyOpen: false
		})
	}

	handleApplyOpen = () => {
		this.setState({
			applyOpen: true
		})
	}

	onChangeHandler = event => {
	  this.setState({
	    file: event.target.files[0],
	  })
	} 

	submit = async () => {
		this.setState({
			applyOpen: false
		})

		const { firstName, lastName, email, phoneNumber, street, city, state, zip, file } = this.state
		const data = new FormData()

    	data.append('file', this.state.file)
    	data.append("firstName", firstName)
    	data.append("lastName", lastName)
    	data.append("email", email)
    	data.append("phoneNumber", phoneNumber)

    	const config = {
    	    headers: {
    	        'content-type': 'multipart/form-data'
    	    }
    	}

    	await upload(data, config)
    			.then(result => console.log(result))
    			.catch(err => console.log(err))
	}

	onChange = (e) => this.setState({[e.target.name]: e.target.value})

	render() {
		const { classes } = this.props
		const { applyOpen } = this.state
		return (
			<div>
				<Grid className={classes.gridContainer}>
					<Grid item className={classes.gridItem}>
						<Grid
							container
							direction="row"
							justify="space-between"
							alignItems="center"
						>
							<Grid item>
								<Button variant="contained" color="primary" onClick={this.handleApplyOpen}> Apply </Button>
							</Grid>
							<Grid item>
								<Button color="primary"> Logout </Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem} xs={12} sm={12} md={12}>
						<div className={classes.card}>
							<div className={classes.cardHeader}>
								<Grid
									container
									direction="row"
									justify="space-between"
									alignItems="center"
								>
									<Grid item>
										<h4 className={classes.cardTitleWhite}>Jobs you've applied to in the past</h4>
										<p className={classes.cardCategoryWhite}>
											Do somethignn
                                        </p>
									</Grid>
								</Grid>
							</div>
							<div className={classes.cardBody}>
								<ApplyToJobsTable
									tableHead={["Event", "Stadium", "Time", "Date"]}
									tableData={[
										["this", "is", "something", "cool"]
									]}
								/>
							</div>
						</div>
					</Grid>
				</Grid>
				<Dialog
					classes={{ paper: classes.dialogPaper }}
					open={applyOpen}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Fill out some information to start applying"}</DialogTitle>
					<DialogContent>
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
											 	onChange={this.onChange}
											 	required 
											/>
										</div>
									</Grid>
									<Grid item>
										<div className={classes.wrapper}>
											<TextField 
											 	label="Last Name" 
											 	name="lastName"
											 	onChange={this.onChange}
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
									 	onChange={this.onChange}
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
									 	onChange={this.onChange}
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
											 	onChange={this.onChange}
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
											 	onChange={this.onChange}
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
									 	onChange={this.onChange}
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
										onChange={this.onChangeHandler}
										id="raised-button-file"
										type="file"
										name="file"
									/>
									<label htmlFor="raised-button-file">
										<Button variant="raised" component="span" className={classes.button}>Upload Resume</Button>
									</label>
								</div>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.submit} color="primary">
							Submit
			          </Button>
						<Button onClick={this.handleApplyClose} color="primary" autoFocus>
							Cancel
			          </Button>
					</DialogActions>
				</Dialog>
			</div>
		)
	}
}

export default withStyles(applyToJobsStyles)(ApplyToJobs)
