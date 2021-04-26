const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const users = require('./routes/api/users')

const app = express()

const db = process.env.MONGODB_URI
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connected to MongoDB successfully'))
	.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World'))
app.use('/api/users', users)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is running on port ${port}`))
