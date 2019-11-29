import React from 'react'

import { CssBaseline, Grid, Paper } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'

import OnboardingOne from '../components/Onboarding/OnboardingOne'
import OnboardingTwo from '../components/Onboarding/OnboardingTwo'
import OnboardingThree from '../components/Onboarding/OnboardingThree'

const Onboarding = () => {
	return (
		<div>
			<CssBaseline />
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
			>
				<Grid item>
					<Switch>
						<Route exact path="/onboarding" component={OnboardingOne} />
						<Route exact path="/onboarding/two" component={OnboardingTwo} />
						<Route exact path="/onboarding/three" component={OnboardingThree} />
					</Switch>
				</Grid>
			</Grid>
		</div>
	)
}

export default Onboarding