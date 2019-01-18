//import Joi--a validate module
const Joi=require('joi')
//get mongoose instance
const mongoose = require('mongoose');

const user=mongoose.model('User',new mongoose.Schema({
  username:{
    type:String,
    required:true,
    minlength:1,
    maxlength:50
  },
  password:{
    type:String,
    required:true,
    minlength:6,
    maxlength:50

  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  permission:[String]
}))

function validateUser(user) {
  const schema = {
    username:Joi.string().min(1).max(50).required(),
    email:Joi.string().required().email(),
    password:Joi.string().regex(/^[a-zA-Z0-9.!$#?]{6,50}$/).required(),
   
  }
  return Joi.validate(user,schema)
}

exports.User=user;
exports.validate=validateUser;
