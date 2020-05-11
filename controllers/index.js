const express = require('express')
const messageRoutes = require('./messages.js')
const userRoutes = require('./users.js')
const createUser = require('./auth.js')

const router = express.Router()

router.use('/totalmessages', messageRoutes)
router.use('/users', userRoutes)
router.use('/', createUser)
module.exports = router;
