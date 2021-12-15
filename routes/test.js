const express = require('express')
const router = express.Router()
const testController = require('../controllers/test')
// Schema
// Name-> String
// Email -> String

//Get API -> Get ALL Students
//Post API -> Create Students
//Put API -> Update Students
//Delete API -> Delete Students

//http://localhost:5000/api/getStudents
router.get('/getStudents',testController.getStudents)
//http://localhost:5000/api/createStudents
router.post('/createStudents',testController.createStudents)
//http://localhost:5000/api/updateStudents
router.put('/updateStudents',testController.updateStudents)
//http://localhost:5000/api/deleteStudents
router.delete('/deleteStudents',testController.deleteStudents)

module.exports = router;