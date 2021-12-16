const express = require('express')
const router = express.Router()
const testController = require('../controllers/test')
const authController= require('../middlewares/auth')
// Schema
// Name-> String
// Email -> String

//Get API -> Get ALL Students
//Post API -> Create Students
//Put API -> Update Students
//Delete API -> Delete Students

//http://localhost:5000/api/getStudents
router.get('/getStudents',[authController.verifyToken,authController.isUser],testController.getStudents)
//http://localhost:5000/api/createStudents
router.post('/createStudents',[authController.verifyToken,authController.isAdmin],testController.createStudents)
//http://localhost:5000/api/updateStudents
router.put('/updateStudents',[authController.verifyToken,authController.isUser],testController.updateStudents)
//http://localhost:5000/api/deleteStudents
router.delete('/deleteStudents',[authController.verifyToken,authController.isAdmin],testController.deleteStudents)

module.exports = router;