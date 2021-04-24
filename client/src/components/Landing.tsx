import { createUseStyles } from 'react-jss'
import React from 'react'

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	}
})

const Landing = () => {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			<div>Work In Progress</div>
		</div>
	)
}

export default Landing
