import axios from 'axios'

export const fetchUsers = () => axios.get(`/api/users`)

export const addUser = user => axios.post(`/api/users/add`, user)
