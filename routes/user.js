const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')


//http://localhost:5000/api/signUp
router.post('/signUp',userController.signUp)

//http://localhost:5000/api/signIn
router.post('/signIn',userController.signIn)

module.exports = router;