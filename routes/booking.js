const express = require('express')
const router = express.Router()
const booking = require('../controllers/booling')
const authenticate = require('../middlewares/authenticate')

router.post('/add', authenticate, booking.add)
router.get('/get', authenticate, booking.get)
router.put('/update/:id', authenticate, booking.update)
router.delete('/delete/:id', authenticate, booking.destroy)

module.exports = router