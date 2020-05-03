const express = require('express')
const messageRoutes = require('./messages.js')
const userRoutes = require('./users.js')

const router = express.Router()

router.use('/totalmessages', messageRoutes)
router.use('/users', userRoutes)

module.exports = router;
