const express = require('express')
const router = express.Router()
const mail = require('../controllers/mailer')

router.post('/send', mail.send)

module.exports = router