const  Joi =require('joi')
const mongoose = require('mongoose')

const User = mongoose.model('User',new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required: true    }
}))
 
function validateUser(user){
    const schema ={
      name : Joi.string(),
      email: Joi.string().required(),
      password: Joi.string().required()
}
return Joi.validate(user,schema) 

}
exports.User = User
exports.validate = validateUser 
