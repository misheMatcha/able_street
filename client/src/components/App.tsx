import { createUseStyles } from 'react-jss'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { addUser, fetchUsers } from '../utils/user_api'

const useStyles = createUseStyles({
	container: {
		height: '100%'
	}
})

const App = () => {
	const classes = useStyles()
	const [users, setUsers] = useState<any>()
	const [name, setName] = useState('')

	// Leaving useEffect and users for testing purposes only

	useEffect(() => {
		fetchUsers()
			.then(fetchedUsers => setUsers(fetchedUsers.data))
			.catch(err => console.log(err))
	}, [users])

	const renderUsers = () => {
		if (!users) return <div>no users</div>
		return users.map((user: any, i: number) => {
			return <div key={i}>{user.username}</div>
		})
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	const submitUser = () => {
		addUser({
			username: name
		})
	}

	return (
		<div className={classes.container}>
			<div>App</div>
			{renderUsers()}
			<div>
				<p>add user</p>
				<input
					placeholder='username'
					value={name}
					onChange={e => handleChange(e)}
				/>
				<button onClick={submitUser}>add user</button>
			</div>
		</div>
	)
}

export default App
