import React, { useEffect } from 'react'

import { withStyles } from "@material-ui/core"
import { Route, Switch } from 'react-router-dom'

import dashboardStyles from "../styles/dashboardStyles"
import Sidebar from "../components/Sidebar"
import ApplyToJobs from '../components/ApplyToJobs'
import Jobs from '../components/Jobs'
import UpdateProfile from '../components/UpdateProfile'
import Contact from '../components/Contact'

const Dashboard = ({ ...props }) => {
	const { classes, email } = props
	return (
		<div className={classes.wrapper}>
			<Sidebar />
			<div className={classes.mainPanel}>
				<div className={classes.content}>
					<div className={classes.container}>
						<Switch>
							<Route exact path="/dashboard" component={ApplyToJobs} />
							<Route exact path="/dashboard/jobs" component={Jobs} />
							<Route exact path="/dashboard/userprofile" component={UpdateProfile} />
							<Route exact path="/dashboard/contact" component={Contact} />
						</Switch>
					</div>	
				</div>
			</div>
		</div>
	)
}

export default withStyles(dashboardStyles)(Dashboard)