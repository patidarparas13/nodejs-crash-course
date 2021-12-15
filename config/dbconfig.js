const mongoose = require('mongoose')
const dbUrl = "mongodb://localhost:27017/nodejs-crash-course"

const connectDB = async () =>{
    try{
        await mongoose.connect(
            dbUrl,
            {
                useNewUrlParser:true,
                useUnifiedTopology:true,
                autoIndex:true
            }
        );
        console.log("MonogDB is been connected...");
    }catch(err){
        console.error(err.message);
        process.exit(1)
    }
}

module.exports = connectDB;