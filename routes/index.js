const express = require('express')
const router = express.Router()

const user = require('./user')
const auth = require('./auth')
const mail = require('./mailer')
const agency = require('./agency')
const company = require('./company')
const vehicle = require('./vehicle')

router.use('/user', user)
router.use('/auth', auth)
router.use('/mailer', mail)
router.use('/agency', agency)
router.use('/company', company)
router.use('/vehicle', vehicle)

module.exports = router
