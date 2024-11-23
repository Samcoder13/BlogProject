const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const conn=mongoose.connect('mongodb+srv://samarth:Password@football.otvumur.mongodb.net/BlogProject')
.then(()=>{
    console.log("MongoDB is connected"); 
})
.catch((err)=>{
    console.log("MongoDB connection error",err);
})

module.exports=conn;