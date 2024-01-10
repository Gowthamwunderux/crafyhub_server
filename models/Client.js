const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        required:true
    },
    jobs:[{
        type:mongoose.Types.ObjectId
    }]
})

module.exports = mongoose.model("Clinet",clientSchema)