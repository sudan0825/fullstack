//import Joi--a validate module
const Joi=require('joi')
//get mongoose instance
const mongoose = require('mongoose');

const tutorialsSchema = mongoose.model('Skills',new mongoose.Schema({
  name: String,
  description: String,
  tags: [String],
  subtopics: [String],
  date: {
    type: Date,
    default: Date.now
  },
  yearexperience:Number
}))

const subtopicSchema = mongoose.model('Subjects', new mongoose.Schema({
  name: String,
  description: String
}))

function validateTutorialInput(tutorial) {
  const schema={
    name:Joi.string().min(3).required(),
    description:Joi.string().min(3).required(),
    tags:Jo,
    yearexperience:Joi.number().min(1)
  }
  return Joi.validate(tutorial,schema)
}

function validatesubject(subject) {
  const schema = {
    name:Joi.string.min(2).required(),
    description:Joi.string.min(10).required()
  }
}
exports.tutorial=tutorialsSchema;
exports.validatetutorial=validateTutorialInput;
exports.validatesubject=validatesubject;

