const express = require('express')
const router = express.Router()

const user = require('./user')
const auth = require('./auth')
const mail = require('./mailer')

router.use('/user', user)
router.use('/auth', auth)
router.use('/mailer', mail)

module.exports = router
