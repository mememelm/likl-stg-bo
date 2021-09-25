const express = require('express')
const authenticate = require('../middlewares/authenticate')
const router = express.Router()

router.get('/test', authenticate, function (req, res, next) {
  res.send('respond with a resource')
})

module.exports = router
