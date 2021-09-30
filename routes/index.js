const express = require('express')
const router = express.Router()

const user = require('./user')
const auth = require('./auth')
const mail = require('./mailer')
const agency = require('./agency')
const company = require('./company')

router.use('/user', user)
router.use('/auth', auth)
router.use('/mailer', mail)
router.use('/agency', agency)
router.use('/company', company)

module.exports = router
