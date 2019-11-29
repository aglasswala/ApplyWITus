import React from 'react'

import { CssBaseline, Grid, Paper, LinearProgress } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'

import OnboardingOne from '../components/Onboarding/OnboardingOne'
import OnboardingTwo from '../components/Onboarding/OnboardingTwo'
import OnboardingThree from '../components/Onboarding/OnboardingThree'


const Onboarding = ({ ...props }) => {
	const progress = () => {
		switch (props.history.location.pathname) {
			case "/onboarding": 
				return 33
			case "/onboarding/two": 
				return 66
			case "/onboarding/three": 
				return 100
			default: 
				return 0
		}
	}

	return (
		<div>
			<LinearProgress variant="determinate" value={progress()} />
			<CssBaseline />
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				style={{height: "95vh"}}
			>
				<Grid item>
					<Paper>
						<Switch>
							<Route exact path="/onboarding" component={OnboardingOne} />
							<Route exact path="/onboarding/two" component={OnboardingTwo} />
							<Route exact path="/onboarding/three" component={OnboardingThree} />
						</Switch>
					</Paper>
				</Grid>
			</Grid>
		</div>
	)
}

export default Onboarding