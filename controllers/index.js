const express = require('express')
// const messageRoutes = require('./message.js')
const userRoutes = require('./users.js')

const router = express.Router()

// router.use('/messages', messageRoutes)
router.use('/users', userRoutes)

module.exports = router;
