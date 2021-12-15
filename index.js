const express = require('express')
const connectDB = require('./config/dbconfig')
const testRoutes = require('./routes/test')
const app = express();
connectDB();

app.use(express.json({extended:false}))
//http://localhost:5000/
app.get('/', async (req,res,next)=>{
    res.status(200).send({message:"Server Got Started!"})
})

app.use('/api',testRoutes)

const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Server Running On Port ${port}`));

module.exports = app;