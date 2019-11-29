import React from 'react'

import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const OnboardingThree = () => {
	return (
		<div>
			<NavLink
				to="/dashboard"
			>
				<Button>
					three
				</Button>
			</NavLink>
		</div>
	)
}

export default OnboardingThree