import React, { Component } from "react"

import { withStyles, Grid, Button, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions } from "@material-ui/core"

import applyToJobsStyles from "../styles/applyToJobsStyles"
import ApplyToJobsTable from "../components/ApplyToJobsTable"

class ApplyToJobs extends Component {

	state = { 
		applyOpen: false
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
			        open={applyOpen}
			        onClose={this.handleApplyClose}
			        aria-labelledby="alert-dialog-title"
			        aria-describedby="alert-dialog-description"
			    >
			        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
			        <DialogContent>
			          <DialogContentText id="alert-dialog-description">
			            Let Google help apps determine location. This means sending anonymous location data to
			            Google, even when no apps are running.
			          </DialogContentText>
			        </DialogContent>
			        <DialogActions>
			          <Button onClick={this.handleApplyClose} color="primary">
			            Disagree
			          </Button>
			          <Button onClick={this.handleApplyClose} color="primary" autoFocus>
			            Agree
			          </Button>
			        </DialogActions>
			    </Dialog>
			</div>
		)
	}
}

export default withStyles(applyToJobsStyles)(ApplyToJobs)