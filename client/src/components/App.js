import { createUseStyles } from 'react-jss'
import Landing from './Landing.jsx'
// import Test from './Test.jsx'

const useStyles = createUseStyles({
	container: {
		height: '100%'
	}
})

function App() {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			{/* <Test /> */}
			<Landing />
		</div>
	)
}

export default App
