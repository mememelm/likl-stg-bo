const express = require('express')
const router = express.Router()
const vehicle = require('../controllers/vehicle')
const authenticate = require('../middlewares/authenticate')

router.post('/add', authenticate, vehicle.add)
router.get('/get', authenticate, vehicle.get)
router.put('/update/:id', authenticate, vehicle.update)
router.delete('/delete/:id', authenticate, vehicle.destroy)
router.get('/by-company/:companyId', authenticate, vehicle.getByCompany)

module.exports = router