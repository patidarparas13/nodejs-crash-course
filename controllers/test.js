const testModel = require('../models/test')


exports.getStudents = async(req,res,next) =>{
    try{
        const findALLStudents = await testModel.find({})
        res.status(200).send({data:findALLStudents})

    }catch(err){
        console.log(err)
    }

}

exports.createStudents = async(req,res,next) =>{
    //name, email
    console.log(req.body)
    try{
        const createUser = await testModel.create(req.body)
        res.status(200).send({data:createUser})
    }catch(err){
        console.log(err)
    }
   
    
}

exports.updateStudents = async(req,res,next) =>{
    try{
        const email = req.body.email
        const name = req.body.name
        const findAndUpdatingUser = await testModel.findOneAndUpdate({email},{
            $set:{
                name:name
            }
        },{
            new:true,
            useFindAndModify:false
        })
        if(!findAndUpdatingUser){
            return res.status(200).send({message:"No User Found"})
        }
        return res.status(200).send({data:findAndUpdatingUser})
    }catch(err){
        console.log(err)
    }
}

exports.deleteStudents = async(req,res,next) =>{
    try{
        const email = req.body.email
        const deletingUser = await testModel.deleteOne({email})
        if(!deletingUser){
            return res.status(200).send({message:"No User Found"})
        }
        return res.status(200).send({data:deletingUser})
    }catch(err){
        console.log(err)
    }
}