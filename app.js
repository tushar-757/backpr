const express = require("express")
const User = require('./models/createform');
const app = express();
const cors = require('cors')
require("dotenv").config()
const mongoose = require("mongoose")

app.use(express.json());
app.use(cors())


const url = process.env.mongourl;

mongoose.connect(url,(err)=>{
    if(err){
        console.log(err)
        console.log("db is not connected")
    }else{
        console.log("db connected successfuly");
    }
})

app.post("/createform",async (req,res)=>{
    const {name,username,email,phone,address,dob} = req.body;
    try{
      const create = await User.create({
          name,
          username,
          email,
          address,
          dob,
          phone
      })
      return res.status(200).json(create)
    }catch(e){
     return res.status(404).json({message:"failed to create user"})
    }
})

const PORT = process.env.PORT || 5000
app.listen(PORT,(err)=>{
    if(err){
        console.log("failed to connect")
    }else{
        console.log(`connected on ${PORT}`)
    }
})