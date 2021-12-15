const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Schema
// Name-> String
// Email -> String

const testSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
},{
    timestamps:true
});

module.exports = TestModel = mongoose.model('test',testSchema)