const mongoose = require('mongoose')

function connect(){
     mongoose.connect('mongodb://localhost:27017/social-media-app')
     .then(()=>{
         console.log('db is connected');
     })
     .catch((err)=>{
         console.log(err);
     })
}

module.exports = connect;