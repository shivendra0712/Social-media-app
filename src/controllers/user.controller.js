const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')


module.exports.login = (req,res)=>{
     res.render('register')
}

module.exports.register =async (req,res)=>{
    const {username, email,profileImage , password} = req.body;

    const hashPassword =await bcrypt.hash('password', 10);
   const user =await userModel.create({
    username,
    email,
    profileImage,
    password:hashPassword
   })

   const token = jwt.sign({
    id:user._id,
    email:user.email
   },"node-auth-social")

   res.status(201).json({user,token});
}
