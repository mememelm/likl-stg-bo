const express = require('express')
const router = express.Router()

const user = require('./user')
const auth = require('./auth')
const mail = require('./mailer')
const agency = require('./agency')
const company = require('./company')
const vehicle = require('./vehicle')
const pricing = require('./pricing')
const booking = require('./booking')
const client = require('./client')

router.use('/user', user)
router.use('/auth', auth)
router.use('/mailer', mail)
router.use('/agency', agency)
router.use('/company', company)
router.use('/vehicle', vehicle)
router.use('/pricing', pricing)
router.use('/booking', booking)
router.use('/client', client)

module.exports = router
