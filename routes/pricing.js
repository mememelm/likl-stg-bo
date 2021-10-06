const express = require('express')
const router = express.Router()
const pricing = require('../controllers/pricing')
const authenticate = require('../middlewares/authenticate')

router.post('/add', authenticate, pricing.add)
router.get('/get', authenticate, pricing.get)
router.put('/update/:id', authenticate, pricing.update)
router.delete('/delete/:id', authenticate, pricing.destroy)
router.get('/by-company/:companyId', authenticate, pricing.getByCompany)
router.get('/by-agency/:agencyId', authenticate, pricing.getByAgency)

module.exports = router