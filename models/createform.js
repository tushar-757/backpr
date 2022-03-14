const mongoose = require('mongoose')

const formScehma = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('formmodel',formScehma)