import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../utils/userApi'

const Test = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		if (users.length === 0)
			fetchUsers()
				.then(userlist => setUsers(userlist.data))
				.catch(err => console.log(err))
	}, [users])

	const renderUsers = () => {
		return users.map(({ username }, i) => <div key={i}>{username}</div>)
	}

	return <div>{renderUsers()}</div>
}

export default Test
