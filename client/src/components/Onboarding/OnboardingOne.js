import React from 'react'

import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const OnboardingOne = () => {
	return (
		<div>
			<NavLink
				to="/onboarding/two"
			>
				<Button>
					One
				</Button>
			</NavLink>
		</div>
	)
}

export default OnboardingOne