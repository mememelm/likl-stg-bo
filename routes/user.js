const express = require('express')
const authenticate = require('../middlewares/authenticate')
const router = express.Router()
const user = require('../controllers/user')

router.get('/exist', authenticate, user.ifUserExist)

module.exports = router
