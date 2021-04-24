import express from 'express'
import mongoose from 'mongoose'
import { mongoDB } from '../config/keys'

import users from './routes/api/users'

const app = express()

mongoose
	.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Successfully connected to MongoDB'))
	.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World'))

app.use('/api/users', users)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
