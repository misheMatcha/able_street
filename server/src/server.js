import express from 'express'
import mongoose from 'mongoose'
import { MONGODB_URI } from '../config/keys'

import users from './routes/api/users'

const app = express()

mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Successfully connected to MongoDB'))
	.catch(err => console.log(err))

// Express 4.16+ deprecated bodyParser, use express
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World'))
app.use('/api/users', users)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is running on ${port}`))
