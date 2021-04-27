import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { addUser, fetchUsers } from '../utils/userApi'

const useStyles = createUseStyles({
	container: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column-reverse',
		height: '100%',
		justifyContent: 'flex-end'
	},
	visitors: {
		paddingTop: 50
	},
	inputs: {}
})

const TempLanding = () => {
	const classes = useStyles()
	const [users, setUsers] = useState([])
	const [username, setUsername] = useState('')

	useEffect(() => {
		if (users)
			fetchUsers()
				.then(userlist => setUsers(userlist.data))
				.catch(err => console.log('from fetchusers', err))
	}, [users])

	const renderUsers = () => {
		if (users.length > 0) {
			return users.map((user, i) => <div key={i}>{user.username}</div>)
		} else {
			return <div>no users</div>
		}
	}

	const handleInput = e => {
		setUsername(e.target.value)
	}

	const handleSubmit = () => {
		addUser({
			username: username
		})
	}

	return (
		<div className={classes.container}>
			<div className={classes.visitors}>
				<div>Whose Visited</div>
				<div>{renderUsers()}</div>
			</div>
			<div className={classes.inputs}>
				<div>Add your name</div>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={e => handleInput(e)}
				/>
				<button onClick={handleSubmit}>add user</button>
			</div>
		</div>
	)
}

export default TempLanding
