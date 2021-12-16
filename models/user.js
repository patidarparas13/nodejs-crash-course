const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    token:{
        type:String
    },
    role:{
        type:String,
        enum:['User','Admin'],
        default:'User'
    }
},{
    timestamps:true
});

module.exports = UserModel = mongoose.model('user',UserSchema)