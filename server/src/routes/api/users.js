import express from 'express'

const router = express.Router()

router.get('/test', (req, res) => res.json({ msg: 'This is the users routes' }))

export default router
