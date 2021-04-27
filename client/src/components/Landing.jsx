import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	container: {
		alignItems: 'center',
		display: 'flex',
		height: '100%',
		justifyContent: 'center'
	}
})

const Landing = () => {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			<div>COMING SOON</div>
		</div>
	)
}

export default Landing
