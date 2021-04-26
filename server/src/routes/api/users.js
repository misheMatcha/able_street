const express = require('express')
const router = express.Router()

const User = require('../../models/User')

router.get('/', (req, res) => res.json({ msg: 'This is the users routes' }))

module.exports = router
