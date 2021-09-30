const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const company = require('../controllers/company')

router.post('/add', authenticate, company.add)
router.get('/get', authenticate, company.get)
router.put('/update/:id', authenticate, company.update)
router.delete('/delete/:id', authenticate, company.destroy)

module.exports = router