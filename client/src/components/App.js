import { createUseStyles } from 'react-jss'
import TempLanding from './TempLanding.jsx'
// import Landing from './Landing.jsx'

const useStyles = createUseStyles({
	container: {
		height: '100%'
	}
})

function App() {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			<TempLanding />
			{/* <Landing /> */}
		</div>
	)
}

export default App
