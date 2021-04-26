const express = require('express')
const router = express.Router()

const User = require('../../models/User')

// router.get('/', (req, res) => res.json({ msg: 'This is the users routes' }))

router.get('/', (req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(404).json({ nousersfound: 'No users found' }))
})

module.exports = router
