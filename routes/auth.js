const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')

router.post('/sign', auth.signing)
router.post('/log', auth.logger)

module.exports = router