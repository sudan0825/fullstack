const { User, validate } = require('../collections/user');
const router = require('express').Router();

//retrieve from users collection
router.get('/',(req,res)=>{
  console.log('hi I am user router')
  res.send('hi I am user router')
})
router.post('/', async (req,res)=>{

  console.log(req.body)
   const {error}=validate(req.body);
  
   if(error) return res.status(400).send(error.details[0].message);
    let user=await User.findOne({email:req.body.email},function(err,second){
      if(err){
        console.log("wrong")
        console.log(err);
        return err
      }else{
        console.log("the second parameter")
        console.log(second)
        return second
      }
      
    });
    console.log(user)
    if(user){
      //console.log(user)
      return res.status(400).send("user already registered")
    }
    
   user = new User({
     username:req.body.username,
     email:req.body.email,
     password:req.body.password,
   })
   console.log(user)
 await user.save();
  res.send('Hi, I am regiserUsr!');
})



module.exports=router
