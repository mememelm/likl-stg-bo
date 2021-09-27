const express = require('express')
const router = express.Router()
const agency = require('../controllers/agency')
const authenticate = require('../middlewares/authenticate')

router.post('/add', authenticate, agency.add)
router.get('/get', authenticate, agency.get)
router.put('/update/:id', authenticate, agency.update)
router.delete('/delete/:id', authenticate, agency.destroy)

module.exports = router