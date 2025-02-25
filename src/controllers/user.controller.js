const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

module.exports.registerViewController = (req,res)=>{
     res.render('register')
}

module.exports.registerUserController =async (req,res)=>{
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

   res.cookie('token',token);

   res.status(201).json({user,token});
}

module.exports.loginViewController = (req,res)=>{
   res.render('login');
}


module.exports.loginUserController =async (req,res)=>{
     const {email,password} = req.body;

     const user =await userModel.findOne({
          email
     })

     if(!user){
          return res.status(400).json({
               message:"user not found"
           })
     }

     console.log(user)
     console.log(email, password);
     const isMatch = await bcrypt.compare(password, user.password);
     console.log(isMatch)
     if(!isMatch){
           return res.status(400).json({
               message:"Invalid credentials"
           })
     }

     const token = jwt.sign({
          id:user._id,
          email:user.email
         },"node-auth-social")
      
         res.cookie('token',token);
      
         res.status(201).json({user,token});
}
  
module.exports.profileViewController = (req,res)=>{
     res.render('profile')
}
