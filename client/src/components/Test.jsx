import React, { useEffect, useState } from 'react'
import { addUser, fetchUsers } from '../utils/userApi'

const Test = () => {
	const [users, setUsers] = useState([])
	const [username, setUsername] = useState('')

	useEffect(() => {
		// if (users)
		// 	fetchUsers()
		// 		.then(userlist => setUsers(userlist.data))
		// 		.catch(err => console.log('from fetchusers', err))
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
		<div>
			{renderUsers()}
			<div>
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

export default Test
