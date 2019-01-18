

const express=require('express');
const server=express();
const user=require('./routers/user');
const skills=require('./routers/skills')

const mongoose=require('mongoose');

//set up and use middleware
const renderFrontendMiddleware=express.static('build');
server.use(renderFrontendMiddleware);
server.use(express.json());

server.use('/api/users',user);
server.use('/api/skills', skills);


//connect to MongoDB

mongoose.connect('mongodb://localhost/fullstack').then(()=>{
    console.log('connect to mongodb connection FULLSTACK successfully')
}).catch((err)=>{
    console.log('cannot connect to mongodb');
    console.log(err)
})




const port = process.env.NODE_ENV||5656
server.listen(port,()=>{
    console.log("success to set up a server at "+ port)
})