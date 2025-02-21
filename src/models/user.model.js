const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    profileImage:{
        type:String
    },
    password:{
        type:String
    }
})

const userModel = new mongoose.model('user' , userSchema);

module.exports = userModel;