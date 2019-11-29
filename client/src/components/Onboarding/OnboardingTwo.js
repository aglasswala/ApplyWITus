import React from 'react'

import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const OnboardingTwo = () => {
	return (
		<div>
			<NavLink
				to="/onboarding/Three"
			>
				<Button>
					Two
				</Button>
			</NavLink>
		</div>
	)
}

export default OnboardingTwo