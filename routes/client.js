const express = require('express')
const router = express.Router()
const client = require('../controllers/client')
const authenticate = require('../middlewares/authenticate')

router.post('/add', authenticate, client.add)
router.get('/get', authenticate, client.get)
router.put('/update/:id', authenticate, client.update)
router.delete('/delete/:id', authenticate, client.destroy)

module.exports = router