const mongoose = require('mongoose'); 
const validator = require('validator')

var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    passwordConfirm:{
        type:String,
        required: [true, "Please Re-Enter your Password here"]
    }
});

//Export the model
module.exports = mongoose.model('User', userSchema);