import axios from 'axios'

export const fetchUsers = () => axios.get(`/api/users`)

export const addUser = (user: any) => axios.post(`/api/users/add`, user)
