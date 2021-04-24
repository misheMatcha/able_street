import { createUseStyles } from 'react-jss'
import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../utils/user_api'

const useStyles = createUseStyles({
	container: {
		height: '100%'
	}
})

const App = () => {
	const classes = useStyles()
	const [users, setUsers] = useState<any>()

	// Leaving useEffect and users for testing purposes only

	useEffect(() => {
		if (!users) {
			fetchUsers()
				.then(fetchedUsers => setUsers(fetchedUsers.data))
				.catch(err => console.log(err))
		}
	})

	return (
		<div className={classes.container}>
			<div>App</div>
		</div>
	)
}

export default App
