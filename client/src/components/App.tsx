import { createUseStyles } from 'react-jss'
import React from 'react'

const useStyles = createUseStyles({
	container: {
		height: '100%'
	}
})

const App = () => {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			<div>App</div>
		</div>
	)
}

export default App
