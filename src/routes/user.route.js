const express = require('express');
const router = express.Router()
const userRegister = require('../controllers/user.controller')

router.get('/register' , userRegister.login)
router.post('/register' , userRegister.register)

module.exports = router;