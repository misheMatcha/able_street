const express = require('express')
const router = express.Router()

const User = require('../../models/User')

// router.get('/', (req, res) => res.json({ msg: 'This is the users routes' }))

router.get('/', (req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(404).json({ nousersfound: 'No users found' }))
})

router.post('/add', (req, res) => {
	User.findOne({ username: req.body.username }).then(user => {
		if (user) {
			return res
				.status(400)
				.json({ useralreadyexists: 'User already exists' })
		} else {
			const newUser = new User({ username: req.body.username })

			newUser
				.save()
				.then(user => res.json(user))
				.catch(err => console.log(err))
		}
	})
})

module.exports = router
