const {Skills, Subject, validatetutorial,validatesubject} = require('../collections/skills');

const router = require('express').Router();


//retrieve from skills collection
router.get('/',(req,res)=>{
  console.log('hi I am skills router')
  res.send('hi I am skills router')
})
router.post('/', async (req,res)=>{
   const { error }=validate(req.body);
   if( error ) return res.status(400).send(error.details[0].message);
   let skill = Skills.findOne({name:req.body.name});
   if( skill ) return res.status(400).send("the topic exist already")
   skill=new Skills({
     name:req.body.name,
     description:req.body.description,
     tags:[...req.body.tags],
     subtopics:[...req.body.subtopic],
     yearexperience:req.body.yearexperience

   })
   await skilll.save()
  res.send('Hi, Skill is saved!');
})

router.post('/subjects', async (req,res)=>{
   const {error}=validate(req.body);
   if(error) return res.status(400).send(error.details[0].message);
    let subject=Subject.findOne({email:req.body.name});
    if(subject){
      return res.status(400).send("subject is registered already ")
    }
   subject = new Subject({
     name:req.body.name,
     description:req.body.description,

   })
 await subject.save();
  res.send('Hi, subject is saved!');
})

module.exports=router
