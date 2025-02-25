const express = require('express');
const router = express.Router()
const userController = require('../controllers/user.controller')
const jwt = require('jsonwebtoken')

//  /users/register [get] 
router.get('/register' , userController.registerViewController)

//  /users/register [post] 
router.post('/register' , userController.registerUserController)

//  /users/login [get] 
router.get('/login' ,userController.loginViewController)


//  /users/login [post] 
router.post('/login' ,userController.loginUserController)

//  /users/profile [get] 
router.get('/profile',(req,res , next)=>{
     try{
        const token = cookies.token;
        jwt.verify(token,"node-auth-social");

        next()
     }
     catch(err){
        console.log(err);
         res.send('unauthorized token');
     }
},userController.profileViewController)


module.exports = router;
