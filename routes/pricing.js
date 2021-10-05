const express = require('express')
const router = express.Router()
const pricing = require('../controllers/pricing')
const authenticate = require('../middlewares/authenticate')

router.post('/add', authenticate, pricing.add)
router.get('/get', authenticate, pricing.get)
router.put('/update/:id', authenticate, pricing.update)
router.delete('/delete/:id', authenticate, pricing.destroy)

module.exports = router