import React, { Component } from "react"

import { withStyles, Grid, Button } from "@material-ui/core"

import applyToJobsStyles from "../styles/applyToJobsStyles"
import ApplyToJobsTable from "../components/ApplyToJobsTable"

class ApplyToJobs extends Component {

	render() {
		const { classes } = this.props
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
								<Button variant="contained" color="primary"> Apply </Button>
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
			</div>
		)
	}
}

export default withStyles(applyToJobsStyles)(ApplyToJobs)